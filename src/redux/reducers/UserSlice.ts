import {IUser} from "../../types/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UserState {
    isInitialized: boolean
    isAuth: boolean
    user: IUser,
    users: IUser[],
    pageSize: number,
    totalCount: number,
    currentPage: number,
    currentUser: IUser
}

const initialState: UserState = {
    isInitialized: false,
    isAuth: false,
    user: {
        _id: "",
        roles: [],
        email: "",
        username: "",
        avatar: "",
        joinedDay: "",
        followings: [],
        followers: [],
        banned: false,
        banReason: "",
        background: "",
        about: ""
    },
    users: [],
    pageSize: 10,
    totalCount: 0,
    currentPage: 1,
    currentUser: {
        _id: "",
        roles: [],
        email: "",
        username: "",
        avatar: "",
        joinedDay: "",
        followings: [],
        followers: [],
        banned: false,
        banReason: "",
        background: "",
        about: ""
    }
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setIsInitialized(state, action: PayloadAction<boolean>) {
            state.isInitialized = action.payload
        },
        setIsAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload
        },
        setUser(state, action: PayloadAction<IUser>) {
            state.user = action.payload
        },
        setUsers(state, action: PayloadAction<IUser[]>) {
            state.users = action.payload
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload
        },
        setTotalCount(state, action: PayloadAction<number>) {
            state.totalCount = action.payload
        },
        follow(state, action: PayloadAction<string>) {
            const index = state.users.findIndex(user => user._id === action.payload)
            state.users[index].followers.push(state.user._id)
        },
        unfollow(state, action: PayloadAction<string>) {
            const index = state.users.findIndex(user => user._id === action.payload)
            const indexF = state.users[index].followers.indexOf(state.user._id) //Проверка не зафоловвен ли уже наш юзер
            if (indexF !== -1) {
                state.users[index].followers.splice(indexF, 1)
            }
        },
        setCurrentUser(state, action: PayloadAction<IUser>) {
            state.currentUser = action.payload
        }
    }
})

export default userSlice.reducer