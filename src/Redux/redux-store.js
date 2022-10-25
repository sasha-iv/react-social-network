import {combineReducers, createStore} from "redux";
import postReducer from "./postReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from './usersReducer'


let reducers = combineReducers({
    profilePage: postReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    // sidebar: sidebarReducer
});

let store = createStore(reducers);
export default store;