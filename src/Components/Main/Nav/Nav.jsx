import React from "react";
import './Nav.scss'
import {NavLink} from "react-router-dom";
import userPhoto from '../../../images/photo/photo2.jpg';
import {connect} from "react-redux";
import {computeHeadingLevel} from "@testing-library/react";

const UserPhoto = (props) => {
    return(
        <div className='userPhoto'>
            <img src={userPhoto} id='avatar' alt='userPhoto'/>
            <h1>{props.name}</h1>
            <span>{props.nick}</span>

            <div className='iconsNav'>
                <div className='iconNavItem'>
                    <span>10 posts</span>
                </div>
                <div className='iconNavItem'>
                    <span>15 photos</span>
                </div>
                <div className='iconNavItem'>
                    <span>16 friends</span>
                </div>
            </div>
        </div>
    )
}

const Nav = (props) => {
    console.log(props)

    let unreadMessageNav = props.dialogsPage.unreadMessage;

    return(
        <div className='navWrapper'>
            <div className='nav'>
                <UserPhoto name='Sarah Nelson' nick='@sarah_n'/>
                <nav>
                    <NavLink to='/profile/*'>Profile</NavLink>
                    <NavLink to='/dialogs/*'>Messages</NavLink>
                    {unreadMessageNav && props.isAuth
                        ? <div className='new countMessagesNav'>1</div>
                        : <div></div>
                    }
                    <NavLink to='/friends'>Friends</NavLink>
                    <NavLink to='/posts'>Posts</NavLink>
                    <NavLink to='/photos'>Photos</NavLink>
                    <NavLink to='/videos'>Videos</NavLink>
                </nav>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps) (Nav);