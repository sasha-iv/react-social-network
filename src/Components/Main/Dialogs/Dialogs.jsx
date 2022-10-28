import React from "react";
import './Dialogs.scss'
import '../Posts/Posts.scss'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Navigate, useParams} from 'react-router-dom';


const Dialogs = (props) => {

    let userId = +useParams().userId;

    // let hideUnreadMessage = () => {
    //     props.unreadMessage(userId);
    // }

    if (props.isAuth === false) return <Navigate to='/login'/>

    let dialogsElement = props.dialogsPage.dialogs.map(dialog => <DialogItem  name={dialog.name} id={dialog.id} key={dialog.id} photo={dialog.photo} date={dialog.date} time={dialog.time}/>)
    if (!userId) return(
        <div className='dialogs'>
            <div className='dialogsElement usersBlock'>
                {dialogsElement}
            </div>
            <div className='dialogsElement textBlock textBlock-centered'>
                <span>You have not selected a dialogue yet</span>
            </div>
        </div>
    )


    let currentUser = props.dialogsPage.dialogs.find((user) => user.id === userId);
    let messageElement = currentUser.messages.map(message => <Message key={message.id} message={message.message} fromMe={message.fromMe}/>);


    let onSendMessageClick = () => {
        props.sendMessage(userId);
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    let newMessageBody = props.dialogsPage.newMessageBody;


    return(
        <div className='dialogs'>
            <div className='dialogsElement usersBlock'>
                {dialogsElement}
            </div>
            <div className='dialogsElement textBlock'>
                <div className='user'>
                    <img src={currentUser.photo} className='userPhoto' alt='userPhoto'/>
                    <h3>{currentUser.name}</h3>
                </div>

                <div className='messagesContainer'>
                    {messageElement}
                </div>
                <textarea onChange={onNewMessageChange} value={newMessageBody} className='textarea' placeholder='your message'></textarea>
                <button onClick={onSendMessageClick} className='btnStyle button'>Send</button>
            </div>

        </div>
    )
}
export default Dialogs;