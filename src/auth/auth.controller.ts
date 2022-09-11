import {Body, Controller, Post, UsePipes} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {CreateUserDto} from "../users/dto/create-user.dto";
import {SignInUserDto} from "./dto/signIn-user.dto";
import {AuthService} from "./auth.service";
import {ValidationPipe} from "../pipes/validation.pipe";

@ApiTags('Authorization')
@Controller('/auth')
export class AuthController {
    constructor(private authService: AuthService) {
    }

    @Post('/signIn')
    signIn(@Body() dto: SignInUserDto) {
        return this.authService.signIn(dto)
    }

    @Post('/signUp')
    signUp(@Body() dto: CreateUserDto) {
        return this.authService.signUp(dto)
    }

    @Post('/logout')
    logout() {

    }
}
