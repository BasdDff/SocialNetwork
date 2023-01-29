import {AppDispatch} from "../index";
import {userApi} from "../../api/user-api";
import {userSlice} from "../reducers/UserSlice";

export const checkAuth = () => async (dispatch: AppDispatch) => {
    try {
        const response = await userApi.getAuth()
        dispatch(userSlice.actions.setIsInitialized(true))
        if (response.status === 200) {
            dispatch(userSlice.actions.setIsAuth(true))
            dispatch(userSlice.actions.setUser(response.data))
        } else {
            dispatch(userSlice.actions.setIsAuth(false))
        }
    } catch (err) {

    }
}

export const login = (user: {email: string, password: string}) => async (dispatch: AppDispatch) => {
    try {
        const response = await userApi.login(user)
        console.log(response.data)
        localStorage.setItem("token", response.data.accessToken)
    } catch (err) {

    }
}

export const getUserById = (userId: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await userApi.getUserById(userId)
        if (response.status === 200) {
            dispatch(userSlice.actions.setCurrentUser(response.data))
        }
    } catch (err) {

    }
}

export const getAllUsers = (page = 0, pageSize = 5) => async (dispatch: AppDispatch) => {
    try {
        const response = await userApi.getAllUsers(page - 1, pageSize)
        if (response.status === 200) {
            dispatch(userSlice.actions.setUsers(response.data.users))
            //dispatch(userSlice.actions.setCurrentPage(page + 1))
            dispatch(userSlice.actions.setTotalCount(response.data.totalCount))
        }
    } catch (err) {

    }
}

export const setCurrentPage = (currentPage: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.setCurrentPage(currentPage))
    } catch (err) {

    }
}

export const follow = (userId: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await userApi.follow(userId)
        if (response.status === 201) {
            dispatch(userSlice.actions.follow(userId))
        }
    } catch (err) {

    }
}

export const unfollow = (userId: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await userApi.unfollow(userId)
        if (response.status === 201) {
            dispatch(userSlice.actions.unfollow(userId))
        }
    } catch (err) {

    }
}