import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {
    @ApiProperty({example: 'email@gmail.com', description: "Email"})
    @IsString({message: 'Must be a string'})
    @IsEmail({},{message: 'Incorrect email'})
    readonly email: string
    @ApiProperty({example: "qwerty123", description: "Password"})
    @IsString({message: 'Must be a string'})
    @Length(3, 16, {message: 'Password must be between 3 and 16 symbols'})
    readonly password: string
}