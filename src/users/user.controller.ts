import {Body, Controller, Get, Param, Post, Put, Query, UseGuards, UsePipes} from "@nestjs/common";
import {UserService} from "./user.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./schemas/user.schema";
import {Roles} from "../auth/roles-auth.decorator";
import {RolesGuard} from "../auth/roles.guard";
import {AddRoleDto} from "./dto/add-role.dto";
import {BanUserDto} from "./dto/ban-user.dto";
import {UserEntity} from "./types/UserEntity";
import {UserDecorator} from "../auth/user.decorator";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {UpdateUserDto} from "./dto/update-user.dto";
import {GetUserDto} from "./dto/get-user.dto";

@ApiTags('User')
@Controller('/user')
export class UserController {
    constructor(private userService: UserService) {
    }

    @ApiOperation({summary: 'Search user by username'})
    @Get('search')
    async search(@Query('username') username: string) {
        return this.userService.search(username)
    }

    @ApiOperation({summary: 'Get All Users'})
    @Get('/allUsers')
    async getAllUsers(@Query('page') page: number, @Query('pageSize') pageSize: number) {
        const users = await this.userService.getAllUsers(page, pageSize)
        let usersDto = []
        for (let i = 0; i < users.length; i++) {
            usersDto.push(new GetUserDto(users[i]))
        }
        const totalCount = await this.userService.getTotalCountUsers()
        return {users: usersDto, totalCount: totalCount}
    }

    @ApiOperation({summary: 'User follow to another user'})
    @UseGuards(JwtAuthGuard)
    @Post('follow/:userId')
    async follow(@UserDecorator() user: UserEntity, @Param('userId') userId: string) {
        if (user._id.toString() === userId) {
            return "You can not follow yourself"
        }
        return this.userService.follow(userId, user._id.toString())
    }

    @ApiOperation({summary: 'User unfollow to another user'})
    @UseGuards(JwtAuthGuard)
    @Post('unfollow/:userId')
    async unfollow(@UserDecorator() user: UserEntity, @Param('userId') userId: string) {
        if (user._id.toString() === userId) {
            return "You can not unfollow yourself"
        }
        return this.userService.unfollow(userId, user._id.toString())
    }

    @ApiOperation({summary: 'Create user (SignUp)'})
    @ApiResponse({status: 200, type: User})
    @Post('/signUp')
    create(@Body() dto: CreateUserDto) {
        console.log('sssss')
        const userData = this.userService.create(dto)
        return userData
    }

    @ApiOperation({summary: 'Get user by Id (mongodb id)'})
    @Get(':userId')
    getUserById(@Param('userId') userId: string) {
        const user = this.userService.getUserById(userId)
        return user
    }

    @UseGuards(JwtAuthGuard)
    @ApiOperation({summary: 'Get current user (auth user)'})
    @Get()
    getCurrentUser(@UserDecorator() user: UserEntity) {
        return user
    }

    // // @UseGuards(JwtAuthGuard)
    // @Roles("admin")
    // @UseGuards(RolesGuard)
    // @Get('/allUsers')
    // getAllUsers() {
    //     return this.userService.getAllUsers()
    // }

    @ApiOperation({summary: "Give role for user"})
    @ApiResponse({status: 200})
    //@Roles("admin")
    //@UseGuards(RolesGuard)
    @Post('/role')
    addRole(@Body() dto: AddRoleDto) {
        return this.userService.addRole(dto)
    }

    @ApiOperation({summary: "Забанить пользователя"})
    @ApiResponse({status: 200})
    @Roles("admin")
    @UseGuards(RolesGuard)
    @Post('/ban')
    ban(@Body() dto: BanUserDto) {
        return this.userService.ban(dto)
    }

    @UseGuards(JwtAuthGuard)
    @Put()
    async updateUser(@Body() dto: UpdateUserDto, @UserDecorator() user: UserEntity) {
        if (dto.password) {
            await this.userService.updatePassword(dto.password)
            return "Password changed successful"
        }
        await this.userService.getAndUpdateUserInfo(user, dto)
        const updatedUser = await this.userService.getUserById(user._id)
        return updatedUser
    }

}