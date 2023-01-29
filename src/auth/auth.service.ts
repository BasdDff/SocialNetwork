import {HttpException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import {CreateUserDto} from "../users/dto/create-user.dto";
import {UserService} from "../users/user.service";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from 'bcryptjs'
import {User} from "../users/schemas/user.schema";
import {SignInUserDto} from "./dto/signIn-user.dto";

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) {
    }

    async signIn(dto: SignInUserDto) {
        const user = await this.validateUser(dto)
        return this.generateToken(user)
    }

    async signUp(dto: CreateUserDto) {
        const candidate = await this.userService.getUserByEmail(dto.email)
        if (candidate) {
            throw new HttpException('Пользователь с таким email уже существует', HttpStatus.BAD_REQUEST)
        }
        const hashPassword = await bcrypt.hash(dto.password, 5)
        const user = await this.userService.create({...dto, password: hashPassword})
        return this.generateToken(user)
    }

    async generateToken(user: User) {
        //Выбираем данные которые нужно зашить в токен
        const payload = {
            _id: user._id,
            email: user.email,
            roles: user.roles,
            banned: user.banned,
            banReason: user.banReason,
            username: user.username,
            avatar: user.avatar,
            background: user.background,
            about: user.about,
            joinedDay: user.joinedDay,
            followers: user.followers,
            followings: user.followings
        }
        const accessToken = this.jwtService.sign(payload)
        return {
            accessToken
        }
    }

    private async validateUser(dto: CreateUserDto) {
        const user = await this.userService.getUserByEmail(dto.email)
        if (!user) {
            throw new HttpException('Неправильный email или пароль', HttpStatus.BAD_REQUEST) //такого юзера нет
        }
        const passwordEquals = await bcrypt.compare(dto.password, user.password)
        if (user && passwordEquals) {
            return user
        }
        throw new UnauthorizedException({message: 'Неправильный email или пароль'})
    }

    async removeToken() {

    }
}
