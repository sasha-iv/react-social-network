import React from "react";
import './Profile.scss'
import image from '../../../images/photo/photo2.jpg'
import '../Posts/Posts.scss';
import {NavLink, useParams} from 'react-router-dom';

import iconUser from '../../../images/icon-user.png'
import iconBirth from '../../../images/icon-date-of-birth.png'
import iconPhone from '../../../images/icon-phone.png'
import iconLoc from '../../../images/icon-location.png'
import iconEmail from '../../../images/icon-email.png'
import iconHobby from '../../../images/icon-id-card.png'


const Profile = (props) => {
    let userId = +useParams().userId;
    let currentUser = props.users.find((user) => user.id === userId);

    let profile = {
        name: 'Sarah Nelson',
        image: image,
        birthday: '18.05.1995',
        phoneNumber: '+38 098 222 33 44',
        location: 'Kyiv, Ukraine',
        email: 'elena@gmail.com',
        hobby: 'walk, play volleyball'
    }

    return(
        <div className='profileWrapper'>
            <div className='userProfile'>
                <img src={currentUser ? currentUser.userPhoto : image} alt='userImg'/>
            </div>

            <h1>Profile</h1>

            <div className='iconsWrapper'>
                <div className='column'>
                    <div className='iconBlock'>
                        <img src={iconUser} alt='iconProfile'/>
                        <span>{currentUser ? currentUser.name : profile.name}</span>
                    </div>
                    <div className='iconBlock'>
                        <img src={iconEmail} alt='iconProfile'/>
                        <span>{currentUser ? currentUser.email :profile.email}</span>
                    </div>
                    <div className='iconBlock'>
                        <img src={iconPhone} alt='iconProfile'/>
                        <span>{currentUser ? currentUser.phoneNumber : profile.phoneNumber}</span>
                    </div>
                </div>
                <div className='column'>
                    <div className='iconBlock'>
                        <img src={iconBirth} alt='iconProfile'/>
                        <span>{currentUser ? currentUser.birthday : profile.birthday}</span>
                    </div>
                    <div className='iconBlock'>
                        <img src={iconLoc} alt='iconProfile'/>
                        <span>{currentUser ? currentUser.location : profile.location}</span>
                    </div>
                    <div className='iconBlock'>
                        <img src={iconHobby} alt='iconProfile'/>
                        <span>Hobby: {currentUser ? currentUser.hobby : profile.hobby}</span>
                    </div>
                </div>
            </div>
            {currentUser
                ? <NavLink to={'/dialogs/' + userId} className='btnStyle button'>Message</NavLink>
                : <span></span>}
        </div>

    )
}
export default Profile;