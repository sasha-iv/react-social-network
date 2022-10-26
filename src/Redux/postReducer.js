import post from "../Components/Main/Posts/Post/Post";

import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';
import img4 from '../images/4.jpg';
import img5 from '../images/5.jpg';
import img6 from '../images/6.jpg';
import img7 from '../images/7.jpg';
import img8 from '../images/8.jpg';
import img9 from '../images/9.jpg';
import img10 from '../images/10.jpg';

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const POST_INCREMENT = 'POST_INCREMENT';

let initialState = {
    posts: [
        {id:10, image: img1, date: '19.10.22 14:25', message: 'Twenty years from now you will be more disappointed by the things that you did not do than by the ones you did do. So throw off the bowlines. Catch the trade winds in your sails. Explore. Dream. Discover', likes: 31},
        {id:9, image: img2, date: '11.10.22 18:40', message: 'Accept responsibility for your life. Know that it is you who will get you where you want to go, no one else', likes: 26},
        {id:8, image: img8, date: '24.09.22 23:01', message: 'Change your life today. Do not gamble on the future, act now, without delay', likes: 13},
        {id:7, image: img7, date: '03.08.22 21:07', message: 'Setting goals is the first step in turning the invisible into the visible. In order to succeed, we must first believe that we can', likes: 58},
        {id:6, image: img6, date: '18.07.22 19:41', message: 'Do not wait, the time will never be« just right. Start where you stand, and work with whatever tools you may have at your command, and better tools will be found as you go along', likes: 23},
        {id:5, image: img5, date: '26.06.22 13:12', message: 'The only way to do great work is to love what you do. If you have not found it yet, keep looking. Do not settle', likes: 12},
        {id:4, image: img4, date: '11.05.22 09:45', message: 'If you fall asleep now, you will dream. If you study now, you will live your dream', likes: 7},
        {id:3, image: img3, date: '04.04.22 16:37', message: 'Opportunity does not knock, it presents itself when you beat down the door', likes: 5},
        {id:2, image: img9, date: '16.03.22 22:03', message: 'Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending', likes: 26},
        {id:1, image: img10, date: '21.02.22 08:20', message: 'The hardships that I encountered in the past will help me succeed in the future', likes: 11}
    ],
    newPostText: ''
}

const postReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let d = new Date();
            let newDate = d.toLocaleDateString() + " " + d.toLocaleTimeString();

            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likes: 0,
                date: newDate
            };
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case POST_INCREMENT:
            let indexOfPost = state.posts.findIndex(post => post.id === action.id);
            state.posts[indexOfPost].likes += 1;

            return{
                ...state,
                posts: [...state.posts]
            }

        default:
            return state;
    }
}
export const addPostActionCreator = () => {
    return{
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return{
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}
export const postIncrementActionCreator = (id) => {
    return{
        type: POST_INCREMENT,
        id: id
    }
}


export default postReducer;