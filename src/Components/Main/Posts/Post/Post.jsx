import React from "react";
import likeIcon from '../../../../images/icon-heart.png'
import postImg from '../../../../images/new-post.png'

const Post = (props) => {
    return(
        <div className='post'>
            <p>{props.message}</p>
            {props.image
                ? <img src={props.image} alt='postImg'/>
                : <img src={postImg} alt='postImg'/>
            }
            <div className='postInfo'>
                <button className='btnStyle' onClick={() => {props.postIncrement(props.id)}}>
                    <span>{props.likes}</span>
                    <img src={likeIcon} alt='likeIcon'/>
                </button>
                <span>{props.date}</span>
            </div>

        </div>
    )
}
export default Post;