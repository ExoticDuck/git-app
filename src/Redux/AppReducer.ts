const SET_USER_FOUND = "SET-USER-FOUND"

type ConditionalStateType = {
    startCondition: boolean,
    isUserFound: boolean
}

let initialState: ConditionalStateType = {
    startCondition: true,
    isUserFound: false
}



export const AppReducer = (state: ConditionalStateType = initialState, action: GeneralACType): ConditionalStateType => {
    switch (action.type) {
        case SET_USER_FOUND: {
            return {startCondition: false, isUserFound: action.payload.isFound}
        } 
        default: return state;
    }
}

type GeneralACType = setUserFoundACType;

type setUserFoundACType = ReturnType<typeof setUserFound>
export const setUserFound = (isFound: boolean) => {
    return {
        type: SET_USER_FOUND,
        payload: {
            isFound
        }
    }
}