import React from "react";
import './Posts.scss'
import Post from "./Post/Post";


const Posts = (props) => {
    // console.log(props)

    let postElement = props.posts.map(post => <Post image={post.image} date={post.date} key={post.id} message={post.message} likes={post.likes}/>)
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

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