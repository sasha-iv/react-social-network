import React from "react";
import './Nav.scss'
import {NavLink} from "react-router-dom";
import userPhoto from '../../../images/user.jpg'
import Events from "../Events/Events";

const UserPhoto = (props) => {
    return(
        <div className='userPhoto'>
            <img src={userPhoto} alt='user-Photo'/>
            <h1>{props.name}</h1>
            <span>{props.nick}</span>
        </div>
    )
}

const Nav = () => {
    return(
        <div className='navWrapper'>
            <div className='nav'>
                <UserPhoto name='Sasha Ivanova' nick='@Sasha_i'/>
                <nav>
                    <NavLink to='/profile'>Profile</NavLink>
                    <NavLink to='/dialogs'>Messages</NavLink>
                    <NavLink to='/friends'>Friends</NavLink>
                    <NavLink to='/posts'>Posts</NavLink>
                    <NavLink to='/photos'>Photos</NavLink>
                    <NavLink to='/videos'>Videos</NavLink>

                </nav>
            </div>
            <Events customClass="leftEvent"/>
        </div>


    )
}
export default Nav;