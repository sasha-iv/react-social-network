import React from "react";
import './Photos.scss';

import photo1 from '../../../images/photo/photo1.webp';
import photo2 from '../../../images/photo/photo2.jpg';
import photo3 from '../../../images/photo/photo3.webp';
import photo4 from '../../../images/photo/photo4.jpg';
import photo5 from '../../../images/photo/photo5.jpg';
import photo6 from '../../../images/photo/photo6.webp';
import photo7 from '../../../images/photo/photo7.webp';
import photo8 from '../../../images/photo/photo8.webp';
import photo9 from '../../../images/photo/photo9.webp';
import photo10 from '../../../images/photo/photo10.jpg';
import photo11 from '../../../images/photo/photo11.jpg';
import photo12 from '../../../images/photo/photo12.webp';
import photo13 from '../../../images/photo/photo13.webp';
import photo14 from '../../../images/photo/photo14.webp';
import photo15 from '../../../images/photo/photo15.webp';

const Photos = () => {

    let scalePhoto = (e) => {

        if (e.target.classList.contains('focused')) {
            e.target.classList.remove('focused')
            return;
        }
        e.target.classList.add('focused');
    }

    const photoArray = [photo1, photo2, photo3, photo6, photo7,  photo8, photo9, photo4, photo5, photo10, photo11, photo12, photo13, photo14, photo15];
    const photo = photoArray.map((photo, i) => <img key={i}  src={photo} alt='photo' onClick={scalePhoto} />)

    return(
        <div className="photosWrapper">
            <div className="photos">
                {photo}
            </div>
        </div>
    )
}

export default Photos;