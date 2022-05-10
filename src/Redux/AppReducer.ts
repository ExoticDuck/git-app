const SET_USER_FOUND = "SET-USER-FOUND";
const UPDATE_USER_IS_FETCHING = "UPDATE-USER-IS-FETCHING";

type ConditionalStateType = {
    startCondition: boolean,
    isUserFound: boolean,
    isUserFetching: boolean
}

let initialState: ConditionalStateType = {
    startCondition: true,
    isUserFound: false,
    isUserFetching: false
}



export const AppReducer = (state: ConditionalStateType = initialState, action: GeneralACType): ConditionalStateType => {
    switch (action.type) {
        case SET_USER_FOUND: {
            return {...state, startCondition: false, isUserFound: action.payload.isFound}
        } 
        case UPDATE_USER_IS_FETCHING: {
            return {...state, isUserFetching: action.payload.isFetching}
        }
        default: return state;
    }
}

type GeneralACType = setUserFoundACType | setUserIsFetchingACType;

type setUserFoundACType = ReturnType<typeof setUserFound>
export const setUserFound = (isFound: boolean) => {
    return {
        type: SET_USER_FOUND,
        payload: {
            isFound
        }
    } as const
}
type setUserIsFetchingACType = ReturnType<typeof setUserIsFetching>
export const setUserIsFetching = (isFetching: boolean) => {
    return {
        type: UPDATE_USER_IS_FETCHING,
        payload: {
            isFetching
        }
    } as const
}