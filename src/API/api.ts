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

export const RepositoriesAPI = {
    getRepositories(username: string) {
        return instance.get(`https://api.github.com/users/${username}/repos`);
    }
}