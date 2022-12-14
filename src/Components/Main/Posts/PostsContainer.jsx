import React from "react";
import {
    addPostActionCreator,
    postIncrementActionCreator,
    updateNewPostTextActionCreator
} from '../../../Redux/postReducer';
import Posts from './Posts'
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return{
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        postIncrement: (id) => {
            dispatch(postIncrementActionCreator(id));
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps) (Posts)

export default PostsContainer;