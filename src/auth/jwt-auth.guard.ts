import {CanActivate, ExecutionContext, Injectable, UnauthorizedException} from "@nestjs/common";
import {Observable} from "rxjs";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class JwtAuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) {
    }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest()
        try {
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
            return true

        } catch (err) {
            throw new UnauthorizedException({message: 'Пользователь не авторизован'})
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