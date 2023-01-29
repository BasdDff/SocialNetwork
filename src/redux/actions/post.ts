import {AppDispatch} from "../index";
import {postApi} from "../../api/post-api";
import {postSlice} from "../reducers/PostSlice";

export const createPost = (post: any) => async (dispatch: AppDispatch) => {
    try {
        const response = await postApi.createPost(post)
        console.log(response.data)
    } catch (err) {

    }
}

export const getTimeLine = () => async (dispatch: AppDispatch) => {
    try {
        const response = await postApi.getTimeLine()
        console.log(response.data)
        if (response.status === 200) {
            dispatch(postSlice.actions.setPosts(response.data))
        }
    } catch (err) {

    }
}

export const likePost = (postId: any, userId: any) => async (dispatch: AppDispatch) => {
    try {
        const response = await postApi.likePost(postId)
        if (response.status === 201) {
            dispatch(postSlice.actions.likePost({postId, userId}))
        }
    } catch (err) {

    }
}

export const getUserPosts = (userId: any) => async (dispatch: AppDispatch) => {
    try {
        const response = await postApi.getUserPosts(userId)
        if (response.status === 200) {
            dispatch(postSlice.actions.setUserPosts(response.data))
        }
    } catch (err) {

    }
}