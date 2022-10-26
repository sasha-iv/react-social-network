import React from "react";
import './Users.scss'
import {NavLink, Route, Routes} from "react-router-dom";

const Users = (props) => {

    return(
        <div className='usersWrapper'>
            <div className='filter'>
                <button onClick={() => props.filterFriends(false)} className='btnStyle button'>All users</button>
                <button onClick={() => props.filterFriends(true)} className='btnStyle button'>My friends</button>
            </div>
            <div className='usersContainer'>
                {props.users.map(user =>
                    <div key={user.id} className='users-all'>
                        <img src={user.userPhoto}/>
                        <h4>{user.name}</h4>
                        <span>{user.location}</span>
                        <div className='userBtns'>
                            <span>
                            {user.followed
                                ? <button onClick={() => {props.followUser(user.id)}} className='btnStyle'>Unfollow</button>
                                : <button onClick={() => {props.unfollowUser(user.id)}} className='btnStyle'>Follow</button>
                            }
                            </span>
                            <NavLink to={'/profile/' + user.id} className='btnStyle'>Profile</NavLink>

                        </div>

                    </div>
                )}
            </div>
        </div>


    )
}
export default Users;