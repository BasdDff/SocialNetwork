import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/UserSlice"
import postReducer from "./reducers/PostSlice"

const rootReducer = combineReducers({
    userReducer,
    postReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

const store = setupStore()

export default store

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]