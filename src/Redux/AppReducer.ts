const SET_USER_FOUND = "SET-USER-FOUND";
const UPDATE_IS_FETCHING = "UPDATE-IS-FETCHING";

type ConditionalStateType = {
    startCondition: boolean,
    isUserFound: boolean,
    isReposFetching: boolean
}

let initialState: ConditionalStateType = {
    startCondition: true,
    isUserFound: false,
    isReposFetching: false
}



export const AppReducer = (state: ConditionalStateType = initialState, action: GeneralACType): ConditionalStateType => {
    switch (action.type) {
        case SET_USER_FOUND: {
            return {...state, startCondition: false, isUserFound: action.payload.isFound}
        } 
        case UPDATE_IS_FETCHING: {
            debugger
            return {...state, isReposFetching: action.payload.isFetching}
        }
        default: return state;
    }
}

type GeneralACType = setUserFoundACType | setReposIsFetchingACType;

type setUserFoundACType = ReturnType<typeof setUserFound>
export const setUserFound = (isFound: boolean) => {
    return {
        type: SET_USER_FOUND,
        payload: {
            isFound
        }
    } as const
}
type setReposIsFetchingACType = ReturnType<typeof setReposIsFetching>
export const setReposIsFetching = (isFetching: boolean) => {
    return {
        type: UPDATE_IS_FETCHING,
        payload: {
            isFetching
        }
    } as const
}