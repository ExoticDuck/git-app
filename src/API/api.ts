import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.github.com",
    headers: {
        withCredentials: true,
    }
})

export const UserAPI = {
    getUser(username: string) {
        return instance.get(`https://api.github.com/users/ExoticDuck`);
    }
}