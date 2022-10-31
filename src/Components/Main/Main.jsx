import React from "react";
import './Main.scss'
import Nav from './Nav/Nav';
import {Navigate, Route, Routes} from "react-router-dom";
import Videos from './Videos/Videos'
import Photos from './Photos/Photos'
import Events from './Events/Events'
import PostsContainer from "./Posts/PostsContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import DialogsContainer from "./Dialogs/DialogsContainer";
import UsersContainer from "./Friends/UsersContainer";
import Login from "../Login/Login";


const Main = () => {

    return(
        <div className='main'>
            <Nav/>
            <Routes>
                <Route exact path='/react-social-network' element={<PostsContainer/>}/>

                <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                {/*<Route path='/profile' element={<ProfileContainer/>}/>*/}
                <Route path='/dialogs/:userId' element={<DialogsContainer />}/>
                {/*<Route path='/dialogs' element={<DialogsContainer />}/>*/}
                <Route path='/friends' element={<UsersContainer/>}/>
                <Route path='/posts' element={<PostsContainer />}/>
                <Route path='/photos' element={<Photos/>}/>
                <Route path='/videos/*' element={<Videos/>}/>
                <Route path='/login/*' element={<Login />}/>

            </Routes>
            <Events customClass="rightEvent"/>
        </div>
    )
}
export default Main;