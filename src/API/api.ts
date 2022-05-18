import axios from "axios";

const instance = axios.create({
    baseURL: `https://api.github.com`,
    headers: {
        Authorization: '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'
    }
})

export const UserAPI = {
    getUser(username: string) {
        return instance.get(`users/${username}`);
    }
}

export const RepositoriesAPI = {
    getRepositories(username: string, currentPage: number = 1) {
        return instance.get(`users/${username}/repos?per_page=4&page=${currentPage}`);
    },
    getRepositoriesCount(username: string) {
        return instance.get(`users/${username}/repos`);
    }
}
