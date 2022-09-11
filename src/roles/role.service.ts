import {Injectable} from '@nestjs/common';
import {CreateRoleDto} from "./roles/create-role.dto";
import {InjectModel} from "@nestjs/mongoose";
import {Role, RoleDocument} from "./schemas/role.schema";
import {Model} from "mongoose";

@Injectable()
export class RoleService {
    constructor(@InjectModel(Role.name) private roleModel: Model<RoleDocument>) {
    }

    async createRole(dto: CreateRoleDto) {
        const role = await this.roleModel.create({...dto})
        return role
    }

    async getRoleByValue(value: string) {
        return this.roleModel.findOne({value})
    }
}
