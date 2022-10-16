import React from "react";
import './Dialogs.scss'
import {NavLink} from "react-router-dom";
import '../Posts/Posts.scss'
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../Redux/state";


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return(
        <div className='dialogItem'>
            <img src={props.photo} alt='userPhoto'/>
            <NavLink to={path} className='name'>{props.name}</NavLink>
            <span>{props.date}</span>
            <span>{props.time}</span>
        </div>
    )
}

const Message = (props) => {
    console.log(props);

    let messageElement = props.messages.map(message =>
        <div className={`message ${ message.fromMe ? 'fromMe' : 'notFromMe'}`}>
            {message.message}
        </div>);

    let user = props.dialogs.find(dialog => dialog.name === 'Maria Tor');

    let newMessageElement = React.createRef();

    let addMessage = () => {
        newMessageElement.current.value = '';
        props.dispatch(addMessageActionCreator());
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }

    return(
        <div className='messagesBlock'>
            <div className='user'>
                <img src={user.photo} alt='userPhoto'/>
                <span>{user.name}</span>
            </div>
            <div className='messagesContainer' >
                {messageElement}
            </div>

            <textarea ref={newMessageElement} onChange={onMessageChange} className='textarea' placeholder='your message'></textarea>
            <button onClick={addMessage} className='btnStyle button'>Send</button>
        </div>
    )
}

const Dialogs = (props) => {
    // console.log(props)

    let state = props.store.getState().dialogsPage;

    let dialogsElement = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} photo={dialog.photo} date={dialog.date} time={dialog.time}/>)

    return(
        <div className='dialogs'>
            <div className='dialogsElement usersBlock'>
                {dialogsElement}
            </div>
            <div className='dialogsElement textBlock'>
                <Message dispatch={props.dispatch} dialogs={props.dialogs} messages={props.messages}/>
            </div>
        </div>

    )
}
export default Dialogs;