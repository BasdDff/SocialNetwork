import $api from "../http";

export const userApi = {
    getAuth() {
        return $api.get(`/user`)
    },
    login(user: {email: string, password: string}) {
        return $api.post(`/auth/signIn`, user)
    },
    getUserById(userId: string) {
        console.log(userId)
        return $api.get(`/user/${userId}`)
    },
    getAllUsers(page: number, pageSize: number) {
        return $api.get(`/user/allUsers`,{
            params: {
                page: page,
                pageSize: pageSize
            }
        })
    },
    follow(userId: string) {
        return $api.post(`/user/follow/${userId}`)
    },
    unfollow(userId: string) {
        return $api.post(`/user/unfollow/${userId}`)
    }
}