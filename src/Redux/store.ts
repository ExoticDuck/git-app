import { applyMiddleware, combineReducers, createStore } from "redux";
import { UserReducer } from "./UserReducer";
import thunkMiddleware from 'redux-thunk';

let RootReducer = combineReducers({
    user: UserReducer,
})

export type AppStateType = ReturnType<typeof RootReducer>;

let store = createStore(RootReducer, applyMiddleware(thunkMiddleware));
export default store;