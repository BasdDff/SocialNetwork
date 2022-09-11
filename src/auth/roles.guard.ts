import {
    CanActivate,
    ExecutionContext,
    HttpException,
    HttpStatus,
    Injectable,
    UnauthorizedException
} from "@nestjs/common";
import {Observable} from "rxjs";
import {JwtService} from "@nestjs/jwt";
import {Reflector} from "@nestjs/core";
import {ROLES_KEY} from "./roles-auth.decorator";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private jwtService: JwtService, private reflector: Reflector) {
    }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        try {
            const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
                context.getHandler(), context.getClass()
            ])
            if (!requiredRoles) {
                return true
            }

            const request = context.switchToHttp().getRequest()

            const authHeader = request.headers.authorization
            const bearer = authHeader.split(' ')[0]
            const accessToken = authHeader.split(' ')[1]

            if (bearer !== 'Bearer' || !accessToken) {
                throw new UnauthorizedException({message: 'Пользователь не авторизован'})
            }

            const user = this.validateAccessToken(accessToken)
            if (!user) {
                throw new UnauthorizedException({message: 'Пользователь не авторизован'})
            }
            request.user = user
            return user.roles.some(role => requiredRoles.includes(role.value)) //true or false

        } catch (err) {
            throw new HttpException('Нет доступа', HttpStatus.FORBIDDEN)
        }
    }

    validateAccessToken(token) {
        try {
            const userData = this.jwtService.verify(token)
            return userData
        } catch (e) {
            return null
        }
    }

}