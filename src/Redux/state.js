import image1 from "../../src/images/01.png";
import image7 from "../../src/images/07.png";
import image2 from "../../src/images/02.png";
import image3 from "../../src/images/03.png";
import image4 from "../../src/images/04.png";
import image6 from "../../src/images/06.png";
import image5 from "../../src/images/05.png";
import image8 from "../../src/images/10.png";
import user1 from "../../src/images/user1.jpg";
import user2 from "../../src/images/user2.jpg";
import user3 from "../../src/images/user3.png";
import user4 from "../../src/images/user4.jpg";
import user5 from "../../src/images/user5.jpg";

const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_POST = 'ADD_POST';
const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let store = {
    _state: {
        profilePage: {
            posts:
                [
                    {id:5, imageFirst: image1, imageSecond:image7, message: 'Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit', likes: 12},
                    {id:4, imageFirst: image2, message: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium', likes: 7},
                    {id:3, imageFirst: image3, message: 'Aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem', likes: 5},
                    {id:2, imageFirst: image4, imageSecond:image6, message: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium', likes: 26},
                    {id:1, imageFirst: image5, imageSecond:image8, message: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident', likes: 11}
                ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs:
                [
                    {id: 1, name: 'Maria Tor', photo: user1, date: '08.10.2022', time: '14:21'},
                    {id: 2, name: 'Tom Smith', photo: user2, date: '07.10.2022', time: '11:37'},
                    {id: 3, name: 'John Miller', photo: user3, date: '28.09.2022', time: '09:13'},
                    {id: 4, name: 'Mia Jonson', photo: user4, date: '16.09.2022', time: '22:18'},
                    {id: 5, name: 'Bri Garden', photo: user5, date: '10.09.2022', time: '10:04'},
                ],
            messages: [
                    {id: 1, message: 'Hello, how are you?', fromMe: false},
                    {id: 2, message: 'Hi, I`m fine, what about you?', fromMe: true},
                    {id: 3, message: 'I`m cool. Let`s meet up tonight', fromMe: false},
                    {id: 4, message: 'Of course. Where?', fromMe: true},
                    {id: 5, message: 'At the restaurant', fromMe: false},
                    {id: 6, message: 'Ok, i`ll be there', fromMe: true},
            ],
            newMessageElement: ''
        },
        videosPages: {}
    },
    _callSubscriber(){
        console.log('change state');             // ??
    },
    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    dispatch(action){
        if(action.type === ADD_POST){
            let newPost = {
                id: this._state.profilePage.posts.length + 1,
                message: this._state.profilePage.newPostText,
                likes: 0
            }
            this._state.profilePage.newPostText = "";
            this._state.profilePage.posts.unshift(newPost);        // змінила push на unshift !!!
            this._callSubscriber(this._state);                // ??
        } else if(action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);                // ??
        } else if(action.type === ADD_MESSAGE){
            let newMessage = {
                id: this._state.dialogsPage.messages.length + 1,
                message: this._state.dialogsPage.newMessageElement,
                fromMe: true
            }
            this._state.dialogsPage.newMessageElement = '';
            this._state.dialogsPage.messages.push(newMessage);
            this._callSubscriber(this._state);
        } else if(action.type === UPDATE_NEW_MESSAGE_TEXT){
            this._state.dialogsPage.newMessageElement = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addMessageActionCreator = () => {
    return{
        type: 'ADD_MESSAGE'
    }
}
export const updateNewMessageTextActionCreator = (text) => {
    return{
        type: 'UPDATE_NEW_MESSAGE_TEXT',
        newText: text
    }
}


export const addPostActionCreator = () => {
    return{
        type: 'ADD_POST'
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return{
        type: 'UPDATE_NEW_POST_TEXT',
        newText: text
    }
}

window.state = store;

export default store;