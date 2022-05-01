import axios from "axios";

// const instance = axios.create({
//     baseURL: "https://api.github.com",
//     withCredentials: true
// })

export const UserAPI = {
    getUser(username: string) {
        debugger
        return axios.get(`https://api.github.com/users/` + username);
    }
}