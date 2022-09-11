import {forwardRef, Module} from "@nestjs/common";
import {UserController} from "./user.controller";
import {UserService} from "./user.service";
import {MongooseModule} from "@nestjs/mongoose";
import {User, UserSchema} from "./schemas/user.schema";
import {Role, RoleSchema} from "../roles/schemas/role.schema";
import {RoleModule} from "../roles/role.module";
import {AuthModule} from "../auth/auth.module";

@Module({
    controllers: [UserController],
    providers: [UserService],
    imports: [
        MongooseModule.forFeature([{name: User.name, schema: UserSchema}, {name: Role.name, schema: RoleSchema}]),
        RoleModule,
        forwardRef(() => AuthModule)
    ],
    exports: [
        UserService
    ]
})
export class UserModule{

}