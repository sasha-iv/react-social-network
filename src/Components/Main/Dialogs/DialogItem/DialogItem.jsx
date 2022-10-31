import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props) => {
    // console.log(props)

    let path = '/dialogs/' + props.id;

    return(
            <div className='dialogItem' onClick={() => props.unreadMessageFunc()}>
                <img src={props.photo} alt='userPhoto'/>
                <NavLink to={path}  className='name'>{props.name}</NavLink>
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
