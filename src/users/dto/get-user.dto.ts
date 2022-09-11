import {Role} from "../../roles/schemas/role.schema";

export class GetUserDto {
    readonly _id: string
    readonly email: string
    readonly roles: Role[]
    readonly banned: boolean
    readonly banReason: string
    readonly username: string
    readonly avatar: string
    readonly background: string
    readonly about: string
    readonly joinedDay: Date
    readonly followers: []
    readonly followings: []

    constructor(model) {
        this._id = model._id
        this.email = model.email
        this.roles = model.roles
        this.banned = model.banned
        this.banReason = model.banReason
        this.username = model.username
        this.avatar = model.avatar
        this.background = model.background
        this.about = model.about
        this.joinedDay = model.joinedDay
        this.followers = model.followers
        this.followings = model.followings
    }
}