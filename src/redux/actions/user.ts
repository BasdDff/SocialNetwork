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
            
        }
    } catch (err) {

    }
}
