import React from "react";
import './Profile.scss'
import image from '../../../images/user.jpg'
import '../Posts/Posts.scss';

import iconUser from '../../../images/icon-user.png'
import iconBirth from '../../../images/icon-date-of-birth.png'
import iconPhone from '../../../images/icon-phone.png'
import iconLoc from '../../../images/icon-location.png'
import iconEmail from '../../../images/icon-email.png'
import iconHobby from '../../../images/icon-id-card.png'

const Profile = (props) => {

    let profile = {
        name: 'Sasha Ivanova',
        image: iconUser,
        birthday: '18.05.1995',
        phoneNumber: '+38 098 222 33 44',
        location: 'Kyiv, Ukraine',
        email: 'user@gmail.com',
        hobby: 'walk, draw, play volleyball'
    }

    return(
        <div className='profileWrapper'>
            <div className='userProfile'>
                <img src={image} alt='userImg'/>
            </div>

            <h1>Profile</h1>

            <div className='iconsWrapper'>
                <div className='column'>
                    <div className='iconBlock'>
                        <img src={iconUser} alt='iconProfile'/>
                        <span>{profile.name}</span>
                    </div>
                    <div className='iconBlock'>
                        <img src={iconEmail} alt='iconProfile'/>
                        <span>{profile.email}</span>
                    </div>
                    <div className='iconBlock'>
                        <img src={iconPhone} alt='iconProfile'/>
                        <span>{profile.phoneNumber}</span>
                    </div>
                </div>
                <div className='column'>
                    <div className='iconBlock'>
                        <img src={iconBirth} alt='iconProfile'/>
                        <span>{profile.birthday}</span>
                    </div>
                    <div className='iconBlock'>
                        <img src={iconLoc} alt='iconProfile'/>
                        <span>{profile.location}</span>
                    </div>
                    <div className='iconBlock'>
                        <img src={iconHobby} alt='iconProfile'/>
                        <span>Hobby: {profile.hobby}</span>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Profile;