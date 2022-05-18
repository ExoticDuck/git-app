import { AxiosError, AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { UserAPI } from "../API/api";
import { setUserFound, setUserIsFetching } from "./AppReducer";
import { updateReposCount } from "./RepositoriesReducer";

const UPLOAD_USER = "UPLOAD-USER";

export type UserType = {
    login: string,
    id: number | null,
    node_id: string,
    avatar_url: string,
    gravatar_id: string,
    url: string,
    html_url: string,
    followers_url: string,
    following_url: string,
    gists_url: string,
    starred_url: string,
    subscriptions_url: string,
    organizations_url: string,
    repos_url: string,
    events_url: string,
    received_events_url: string,
    type: string,
    site_admin: boolean,
    name: string | null,
    company: string | null,
    blog: string,
    location: string,
    email: string | null,
    hireable: boolean | null,
    bio: string,
    twitter_username: string | null,
    public_repos: number,
    public_gists: number,
    followers: number,
    following: number,
    created_at: string,
    updated_at: string
}

let initialState = {
    login: "",
    id: null,
    node_id: "",
    avatar_url: "",
    gravatar_id: "",
    url: "",
    html_url: "",
    followers_url: "",
    following_url: "",
    gists_url: "",
    starred_url: "",
    subscriptions_url: "",
    organizations_url: "",
    repos_url: "",
    events_url: "",
    received_events_url: "",
    type: "",
    site_admin: false,
    name: null,
    company: null,
    blog: "",
    location: "",
    email: null,
    hireable: null,
    bio: "",
    twitter_username: null,
    public_repos: 0,
    public_gists: 0,
    followers: 0,
    following: 0,
    created_at: "",
    updated_at: ""
}

export const UserReducer = (state: UserType = initialState, action: GeneralACType) => {
    switch (action.type) {
        case UPLOAD_USER: {
            return action.payload.user;
        }
        default: return state;
    }
}

type GeneralACType = UploadUserType;

export type UploadUserType = ReturnType<typeof UploadUser>
let UploadUser = (user: UserType) => {
    return {
        type: UPLOAD_USER,
        payload: {
            user
        }
    } as const
}

export const getUser = (username: string) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(setUserIsFetching(true));
            let result = await UserAPI.getUser(username);
            dispatch(setUserFound(true));
            dispatch(UploadUser(result.data));
            dispatch(updateReposCount(result.data.public_repos))
            dispatch(setUserIsFetching(false));
        } catch (error) {
            if ((error as AxiosError)?.response?.status === 404) {
                dispatch(setUserFound(false));
                dispatch(setUserIsFetching(false));
            }
        }
    }
}

