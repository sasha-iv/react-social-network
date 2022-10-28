import {combineReducers, createStore} from "redux";
import postReducer from "./postReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from './usersReducer'
import authUserReducer from "./authUserReducer";
import Photos from "../Components/Main/Photos/Photos";
import Videos from "../Components/Main/Videos/Videos";


let reducers = combineReducers({
    profilePage: postReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authUserReducer,
    photos: Photos,
    videos: Videos
});

let store = createStore(reducers);
export default store;