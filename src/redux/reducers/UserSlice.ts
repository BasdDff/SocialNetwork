import {IUser} from "../../types/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UserState {
    isInitialized: boolean
    isAuth: boolean
    user: IUser
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
        joinedDay: new Date(),
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
    }
})

export default userSlice.reducer