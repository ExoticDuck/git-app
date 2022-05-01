import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { UserReducer } from "./UserReducer";

let RootReducer = combineReducers({
    user: UserReducer,
})

export type AppStateType = ReturnType<typeof RootReducer>;

let store = createStore(RootReducer, applyMiddleware(thunkMiddleware));
export default store;