import user1 from "../images/user1.jpg";
import user2 from "../images/user2.jpg";
import user3 from "../images/user3.jpg";
import user4 from "../images/user4.jpg";
import user5 from "../images/user5.jpg";
import user6 from "../images/user6.jpg";
import user7 from "../images/user7.jpg";


const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
// const UNREAD_MESSAGE = 'UNREAD_MESSAGE';

let initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Maria Tor',
            photo: user1,
            date: '08.10.2022',
            time: '14:21',
            messages: [
                {id: 1, message: 'Hello, how are you?', fromMe: false, date: '23.10.2022 14:15'},
                {id: 2, message: 'Hi, I`m fine, what about you?', fromMe: true, date: '11.10.2022 17:15'},
                {id: 3, message: 'I`m cool. Let`s meet up tonight', fromMe: false, date: '19.09.2022 05:24'},
                {id: 4, message: 'Of course. Where?', fromMe: true, date: '17.09.2022 04:24'},
                {id: 5, message: 'At the restaurant', fromMe: false, date: '21.07.2022 15:24'},
                {id: 6, message: 'Ok, i`ll be there', fromMe: true, date: '24.11.2022 18:29'},
            ],
        },
        {
            id: 2,
            name: 'Tom Smith',
            photo: user2,
            date: '07.10.2022',
            time: '11:37',
            messages: [
                {id: 1, message: 'What type of music do you like to listen to?', fromMe: false, date: '23.10.2022 14:15'},
                {id: 2, message: 'I like listening to different kinds of music.', fromMe: true, date: '11.10.2022 17:15'},
                {id: 3, message: 'Like what, for instance?', fromMe: false, date: '19.09.2022 05:24'},
                {id: 4, message: 'I enjoy Rock and R&B.', fromMe: true, date: '17.09.2022 04:24'},
                {id: 5, message: 'Why is that?', fromMe: false, date: '21.07.2022 15:24'},
                {id: 6, message: 'I like the different instruments that they use.', fromMe: true, date: '24.11.2022 18:29'},
                {id: 7, message: 'That`s a good reason to like something.', fromMe: false,  date: '11.10.2022 17:15'},
                {id: 8, message: 'Yeah, I think so too.', fromMe: true,  date: '21.07.2022 15:24'},
                {id: 9, message: 'Hi, what`s up?', fromMe: false,  date: '26.06.2022 13:21'},
            ],
        },
        {
            id: 3,
            name: 'John Miller',
            photo: user3,
            date: '28.09.2022',
            time: '09:13',
            messages: [
                {id: 1, message: 'Can I ask you a question?', fromMe: false, date: '26.06.2022 13:21'},
                {id: 2, message: 'What is it?', fromMe: true, date: '21.07.2022 15:24'},
                {id: 3, message: 'May I please see that?', fromMe: false, date: '11.10.2022 17:15'},
                {id: 4, message: 'Yes  you can.', fromMe: true, date: '24.11.2022 18:29'},
                {id: 5, message: 'How can I do this?', fromMe: false, date: '13.11.2022 09:04'},
                {id: 6, message: 'I’ll show you.', fromMe: true, date: '17.09.2022 04:24'},
            ],
        },
        {
            id: 4,
            name: 'Mia Jonson',
            photo: user4,
            date: '16.09.2022',
            time: '22:18',
            messages: [
                {id: 1, message: 'What are you doing this weekend?', fromMe: false, date: '17.09.2022 04:24'},
                {id: 2, message: 'I`m going to the movies with a friend. How about you?', fromMe: true,  date: '13.11.2022 09:04'},
                {id: 3, message: 'I`m not sure yet.', fromMe: false, date: '24.11.2022 18:29'},
                {id: 4, message: 'Well, did you want to go see a movie with me?', fromMe: true, date: '11.10.2022 17:15'},
                {id: 5, message: 'No, thanks, i`ll be busy, maybe another time.', fromMe: false, date: '21.07.2022 15:24'},
                {id: 6, message: 'Okay, sounds good.', fromMe: true, date: '26.06.2022 13:21'},
            ],
        },
        {
            id: 5,
            name: 'Bri Garden',
            photo: user5,
            date: '10.09.2022',
            time: '10:04',
            messages: [
                {id: 1, message: 'Did you want to go to the party?', fromMe: false, date: '26.06.2022 13:21'},
                {id: 2, message: 'When does it start?', fromMe: true,  date: '21.07.2022 15:24'},
                {id: 3, message: 'At 8:00 p.m.', fromMe: false, date: '11.10.2022 17:15'},
                {id: 4, message: 'I`ll be there.', fromMe: true, date: '17.09.2022 04:24'},
            ],
        },
        {
            id: 6,
            name: 'Joi Lambert',
            photo: user6,
            date: '02.10.2022',
            time: '12:09',
            messages: [
                {id: 1, message: 'Hi, have you thought about where would you like to go to dinner on Friday for your birthday?', fromMe: false, date: '17.09.2022 04:24'},
                {id: 2, message: 'I am not sure. I don`t know that many restaurants around here.', fromMe: true, date: '11.10.2022 17:15'},
                {id: 3, message: 'You know, we could look online at the local Internet sites.', fromMe: false, date: '21.07.2022 15:24'},
                {id: 4, message: 'Good. Let`s take a look!', fromMe: true, date: '26.06.2022 13:21'},
            ],
        },
        {
            id: 7,
            name: 'Daniel Rout',
            photo: user7,
            date: '02.10.2022',
            time: '12:09',
            messages: [
                {id: 1, message: 'How do I buy my textbooks?', fromMe: false, date: '26.06.2022 13:21'},
                {id: 2, message: 'Do you have your book list for your class?', fromMe: true, date: '21.07.2022 15:24'},
                {id: 3, message: 'Yes, I have my list.', fromMe: false, date: '11.10.2022 17:15'},
                {id: 4, message: 'Fine. Once you have it, you can go to the bookstore. Do you know where that is?', fromMe: true, date: '17.09.2022 04:24'},
                {id: 5, message: 'Yes, I know where the bookstore is.', fromMe: false, date: '12.05.2022 18:03'},
                {id: 6, message: 'OK, so once you pass the gym, it\'s the first door on your left.', fromMe: true, date: '11.06.2022 16:41'},
            ],
        },
    ],
    newMessageBody: '',
    // unreadMessage: false
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let d = new Date();
            let newDate = d.toLocaleDateString() + " " + d.toLocaleTimeString();

            let currentUserIndex = state.dialogs.findIndex((user) => user.id === action.userId);
            let body = {
                id: state.dialogs[currentUserIndex].messages.length + 1,
                message: state.newMessageBody,
                fromMe: true,
                date: newDate
            };
            state.dialogs[currentUserIndex].messages.push(body);
            return {
                ...state,
                newMessageBody: '',
            }

        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }

        // case UNREAD_MESSAGE:
        //     // console.log(action)
        //     if(action.userId === 2){
        //         state.unreadMessage = true;
        //     }
        //     return state;
        default:
            return state;
    }
}
export const sendMessageCreator = (userId) => {
    return ({
        type: SEND_MESSAGE,
        userId
    })
}
export const updateNewMessageBodyCreator = (body) => {
    return ({
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    })
}

// export const unreadMessageCreator = (userId) => {
//     return({
//         type: UNREAD_MESSAGE,
//         userId
//     })
// }

export default dialogsReducer;