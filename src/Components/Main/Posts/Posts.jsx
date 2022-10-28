import React from "react";
import './Posts.scss'
import Post from "./Post/Post";
import {Navigate} from "react-router-dom";


const Posts = (props) => {
    let postElement = props.posts.map(post => <Post image={post.image} postIncrement={props.postIncrement} date={post.date} key={post.id} message={post.message} likes={post.likes} id={post.id}/>)
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    if (props.isAuth === false) return <Navigate to='/login'/>

    return(
        <div className='postsWrapper'>
            <div className='newPost'>
                <textarea className='textarea' value={props.newPostText} onChange={onPostChange} ref={newPostElement} placeholder='write a post'></textarea>
                <button onClick={onAddPost} className='btnStyle button'>Post</button>
            </div>
            <div className='posts'>
                {postElement}
            </div>
        </div>

    )
}
export default Posts;