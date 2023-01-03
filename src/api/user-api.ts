import $api from "../http";

export const userApi = {
    getAuth() {
        return $api.get(`/user`)
    },
    login(user: {email: string, password: string}) {
        return $api.post(`/auth/signIn`, user)
    },
    getUserById(userId: string) {
        return $api.get(`/user/${userId}`)
    }
}