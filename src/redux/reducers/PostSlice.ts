import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPost} from "../../types/IPost";

interface PostState {
    posts: IPost[]
    userPosts: IPost[]
}

const initialState: PostState = {
    posts: [],
    userPosts: []
}

interface LikeProps {
    userId: any
    postId: any
}

export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        setPosts(state, action: PayloadAction<IPost[]>) {
            state.posts = action.payload
        },
        likePost(state, action: PayloadAction<LikeProps>) {
            const index = state.posts.findIndex(post => post._id === action.payload.postId)
            if (!state.posts[index].likes.includes(action.payload.userId)) {
                state.posts[index].likes.push(action.payload.userId)
            } else {
                const indexUser = state.posts[index].likes.indexOf(action.payload.userId)
                if (indexUser !== -1) {
                    state.posts[index].likes.splice(indexUser, 1)
                }
            }
        },
        setUserPosts(state, action: PayloadAction<IPost[]>) {
            state.userPosts = action.payload
        }
    }
})

export default postSlice.reducer