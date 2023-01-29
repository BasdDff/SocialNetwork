import $api from "../http";

export const postApi = {
    createPost(post: any) {
        return $api.post(`/post`, post)
    },
    getTimeLine() {
        return $api.get(`/post/timeline`)
    },
    likePost(postId: any) {
        return $api.post(`/post/like/${postId}`)
    },
    getUserPosts(userId: any) {
       return $api.get(`/post/posts/${userId}`)
    }
}