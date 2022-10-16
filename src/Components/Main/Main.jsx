import React from "react";
import './Main.scss'
import Nav from './Nav/Nav'
import Profile from './Profile/Profile'
import Dialogs from './Dialogs/Dialogs'
import {Route, Routes} from "react-router-dom";
import Videos from './Videos/Videos'
import Posts from "./Posts/Posts";
import Photos from './Photos/Photos'
import Events from './Events/Events'
import Friends from "../Main/Friends/Friends";


const Main = (props) => {
    // console.log(props.mainState);
    return(
        <div className='main'>
            <Nav/>
            <Routes>
                <Route exact path='/social-network-app' element={<Profile/>}/>

                <Route path='/profile' element={<Profile/>}/>
                <Route exact path='/dialogs/*' element={<Dialogs store={props.store} dialogs={props.mainState.dialogsPage.dialogs} messages={props.mainState.dialogsPage.messages} dispatch={props.dispatch}/>}/>
                <Route path='/friends' element={<Friends/>}/>
                <Route path='/posts' element={<Posts store={props.store} posts={props.mainState.profilePage.posts} dispatch={props.dispatch}/>}/>
                <Route path='/photos' element={<Photos/>}/>
                <Route path='/videos' element={<Videos/>}/>
            </Routes>
            <Events customClass="rightEvent"/>
        </div>
    )
}
export default Main;