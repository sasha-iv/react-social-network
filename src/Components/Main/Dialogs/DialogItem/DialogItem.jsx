import { useNavigate } from "react-router-dom";
import React from "react";

const DialogItem = (props) => {
    let navigate = useNavigate();

    let path = '/dialogs/' + props.id;

    let showMessage = () => {
        props.unreadMessageFunc(props.id);
        navigate(path);
    }

    return(
            <div className='dialogItem'>
                <img src={props.photo} alt='userPhoto'/>
                <div onClick={showMessage} className='name'>{props.name}</div>
                <span>{props.date}</span>
                <span>{props.time}</span>
                {props.unreadMessage
                    ? <div className='new countMessagesUser'>1</div>
                    :  <div></div>
                }
            </div>
    )
}

export default DialogItem;
