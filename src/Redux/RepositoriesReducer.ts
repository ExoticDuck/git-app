import { Dispatch } from "redux";
import { RepositoriesAPI } from "../API/api";

const UPDATE_REPOS_LIST = "UPDATE-REPOS-LIST";
const UPDATE_REPOS_COUNT = "UPDATE-REPOS-COUNT";

type RepositoriesStateType = {
    repositoriesCount: number,
    repositoriesList: RepositoryType[]
};
export type RepositoryType = {
        id: number,
        node_id: string,
        name: string,
        full_name: string,
        private: boolean,
        owner: {
          login: string,
          id: number,
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
          site_admin: boolean
        },
        html_url: string,
        description: string,
        fork: boolean,
        url: string,
        forks_url: string,
        keys_url: string,
        collaborators_url: string,
        teams_url: string,
        hooks_url: string,
        issue_events_url: string,
        events_url: string,
        assignees_url: string,
        branches_url: string,
        tags_url: string,
        blobs_url: string,
        git_tags_url: string,
        git_refs_url: string,
        trees_url: string,
        statuses_url: string,
        languages_url: string,
        stargazers_url: string,
        contributors_url: string,
        subscribers_url: string,
        subscription_url: string,
        commits_url: string,
        git_commits_url: string,
        comments_url: string,
        issue_comment_url: string,
        contents_url: string,
        compare_url: string,
        merges_url: string,
        archive_url: string,
        downloads_url: string,
        issues_url: string,
        pulls_url: string,
        milestones_url: string,
        notifications_url: string,
        labels_url: string,
        releases_url: string,
        deployments_url: string,
        created_at: string,
        updated_at: string,
        pushed_at: string,
        git_url: string,
        ssh_url: string,
        clone_url: string,
        svn_url: string,
        homepage: string,
        size: number,
        stargazers_count: number,
        watchers_count: number,
        language: null | string,
        has_issues: boolean,
        has_projects: boolean,
        has_downloads: boolean,
        has_wiki: boolean,
        has_pages: boolean,
        forks_count: number,
        mirror_url: null | string,
        archived: boolean,
        disabled: boolean,
        open_issues_count: number,
        license: {
          key: string,
          name: string,
          spdx_id: string,
          url: string,
          node_id: string
        },
        allow_forking: boolean,
        is_template: boolean,
        topics: string[],
        visibility: string,
        forks: number,
        open_issues: number,
        watchers: number,
        default_branch: string
}

let initialState:RepositoriesStateType = {
    repositoriesCount: 0,
    repositoriesList: []
}

export const RepositoriesReducer = (state: RepositoriesStateType = initialState, action: GeneralACType) => {
    switch (action.type) {
        case UPDATE_REPOS_LIST: {
            return {...state, repositoriesList: [...action.payload.list]}
        }
        case UPDATE_REPOS_COUNT: {
            return {...state, repositoriesCount: action.payload.count}
        }
        default:
            return state;
    }
}
type GeneralACType = UpdateReposListACType | UpdateReposCountACType;
type UpdateReposListACType = ReturnType<typeof updateReposList>
export const updateReposList = (list: RepositoryType[]) => {
    return {
        type: UPDATE_REPOS_LIST,
        payload: {
            list
        }
    } as const
}
type UpdateReposCountACType = ReturnType<typeof updateReposCount>
export const updateReposCount = (count: number) => {
    return {
        type: UPDATE_REPOS_COUNT,
        payload: {
            count
        }
    } as const
}

export const getRepositories = (username: string, currentPage: number) => {
    return async (dispatch: Dispatch) => {
        let result = await RepositoriesAPI.getRepositories(username, currentPage);
        let countResult = await RepositoriesAPI.getRepositoriesCount(username);
        dispatch(updateReposCount(countResult.data.length))
        dispatch(updateReposList(result.data));
    }
}