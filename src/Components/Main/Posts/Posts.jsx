import React from "react";
import './Posts.scss'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/state";

const Post = (props) => {
    const img2 = <img src={props.imageSecond} alt='postImg2'/>

    return(
        <div className='post'>
            <div className='postImages'>
                {props.imageFirst&&<img src={props.imageFirst} alt='postImg1'/>}
                {props.imageSecond&&img2}
            </div>

            <p>{props.message}</p>
            <button className='btnStyle' >Likes {props.likes}</button>
        </div>
    )
}

const Posts = (props) => {
    let state = props.posts;
    console.log(props);

    let postElement = state.map(post => <Post imageFirst={post.imageFirst}  imageSecond={post.imageSecond} message={post.message} likes={post.likes}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return(
        <div className='postsWrapper'>
            <div className='newPost'>
                <textarea className='textarea' onChange={onPostChange} ref={newPostElement} placeholder='write a post'></textarea>
                <input type='file' multiple id='inputFile'/>
                <button onClick={addPost} className='btnStyle button'>Post</button>
            </div>
            <div className='posts'>
                {postElement}
            </div>
        </div>

    )
}
export default Posts;