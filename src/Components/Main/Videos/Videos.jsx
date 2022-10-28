import React from "react";
import './Videos.scss'
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import AllVideos from "./All-videos";
import FavoriteVideos from "./Favorite-videos";
import '../Friends/Users.scss'
import {connect} from "react-redux";

const Videos = (props) => {

    if (props.isAuth === false) return <Navigate to='/login'/>

    return(
        <div className='videosWrapper'>
            <div className='filter'>
                <NavLink to={'/videos/all-videos'} className='btnStyle button' >All videos</NavLink>
                <NavLink to={'/videos/favorite-videos'} className='btnStyle button' >Favorite videos</NavLink>
            </div>
            <div >
                <Routes>
                    <Route exact path={'/'} element={<AllVideos/>}></Route>

                    <Route path={'all-videos'} element={<AllVideos/>}></Route>
                    <Route path={'favorite-videos'} element={<FavoriteVideos/>}></Route>
                </Routes>
            </div>
        </div>

    )
}
let mapStateToProps = (state) => {
    return{
        videos: state.videos,
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps) (Videos);