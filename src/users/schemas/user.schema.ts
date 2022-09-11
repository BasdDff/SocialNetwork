import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";
import {ApiProperty} from "@nestjs/swagger";
import * as mongoose from "mongoose"
import {Role} from "../../roles/schemas/role.schema";

export type UserDocument = User & Document

@Schema()
export class User extends mongoose.Document { //extends для ._id в типах

    // @Prop()
    // _id: mongoose.Schema.Types.ObjectId

    @ApiProperty({example: 'email@gmail.com', description: "Email"})
    @Prop({
        type: String,
        required: true,
        unique: true,
        max: 50
    })
    email: string

    @ApiProperty({example: "qwerty123", description: "Password"})
    @Prop({
        type: String,
        required: true
    })
    password: String

    @Prop({
        type: Array,
        //required: true
    })
    roles: Role[]
    // @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: "Role"}]})
    // roles: Role[]

    @ApiProperty({example: "true / false", description: "Забанен или нет"})
    @Prop({
        type: Boolean,
        default: false
    })
    banned: boolean

    @ApiProperty({example: "Вы существуете", description: "Причина бана"})
    @Prop({
        type: String
    })
    banReason: string

    @ApiProperty({example: "alexden345"})
    @Prop({
        type: String,
        default: "",
        max: 50
    })
    username: string

    @ApiProperty({example: "Аватарка профиля"})
    @Prop({
        type: String,
        default: ""
    })
    avatar: string

    @ApiProperty({example: "Фоновое изображение"})
    @Prop({
        type: String,
        default: ""
    })
    background: string

    @ApiProperty({example: "Инфо о себе"})
    @Prop({
        type: String,
        default: ""
    })
    about: string

    @Prop({
        type: Date,
        default: Date.now
    })
    joinedDay: Date

    @Prop({
        type: Array,
        default: []
    })
    followers: []

    @Prop({
        type: Array,
        default: []
    })
    followings: []

}

export const UserSchema = SchemaFactory.createForClass(User)