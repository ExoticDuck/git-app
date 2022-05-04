import { applyMiddleware, combineReducers, createStore } from "redux";
import { UserReducer } from "./UserReducer";
import thunkMiddleware from 'redux-thunk';
import { AppReducer } from "./AppReducer";
import { RepositoriesReducer } from "./RepositoriesReducer";

let RootReducer = combineReducers({
    user: UserReducer,
    appCondition: AppReducer,
    repositories: RepositoriesReducer,
})

export type AppStateType = ReturnType<typeof RootReducer>;

let store = createStore(RootReducer, applyMiddleware(thunkMiddleware));
export default store;