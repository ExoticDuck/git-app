import axios from "axios";

const instance = axios.create({
    baseURL: `https://api.github.com`,
    headers: {
        Authorization: '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'
    }
})

export const UserAPI = {
    getUser(username: string) {
        return instance.get(`https://api.github.com/users/${username}`);
    }
}
// export const UserAPI = {
//     getUser(username: string) {
//         return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`);
//     }
// }