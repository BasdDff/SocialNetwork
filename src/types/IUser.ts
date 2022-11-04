interface Role {
    value: string
    description: string
}

export interface IUser {
    _id: string
    email: string
    roles: Role[]
    banned: boolean
    banReason: string
    username: string
    avatar: string
    background: string
    about: string
    joinedDay: Date
    followers: string[]
    followings: string[]
}