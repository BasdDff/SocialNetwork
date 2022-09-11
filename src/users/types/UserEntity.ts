import {Request} from "express";
import {Types} from "mongoose";

export interface UserEntity extends Request {
    _id: Types.ObjectId
    email: string
    roles: [{
        value: string,
        description: string,
    }],
    username: string,
    avatar: string,
    background: string,
    about: string,
    joinedDay: Date,
    followers: [],
    followings: [],
}