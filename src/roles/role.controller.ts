import {Body, Controller, Get, Param, Post, UsePipes} from '@nestjs/common';
import {RoleService} from "./role.service";
import {CreateRoleDto} from "./roles/create-role.dto";
import {ValidationPipe} from "../pipes/validation.pipe";

@Controller('/role')
export class RoleController {
    constructor(private roleService: RoleService) {
    }

    @UsePipes(ValidationPipe)
    @Post()
    createRole(@Body() dto: CreateRoleDto) {
        return this.roleService.createRole(dto)
    }

    @Get('/:value')
    getRoleByValue(@Param('value') value: string) {
        return this.roleService.getRoleByValue(value)
    }
}
