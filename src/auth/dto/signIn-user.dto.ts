import {ApiProperty} from "@nestjs/swagger";

export class SignInUserDto {
    @ApiProperty({example: 'email@gmail.com', description: "Email"})
    readonly email: string
    @ApiProperty({example: "qwerty123", description: "Password"})
    readonly password: string
}