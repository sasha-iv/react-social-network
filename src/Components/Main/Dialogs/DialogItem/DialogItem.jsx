import {NavLink, Route, Routes} from "react-router-dom";
import React from "react";

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;

    return(
            <div className='dialogItem' >
                <img src={props.photo} alt='userPhoto'/>
                <NavLink to={path}  className='name'>{props.name}</NavLink>
                <span>{props.date}</span>
                <span>{props.time}</span>
                {/*{props.isUnread*/}
                {/*    ? <div></div>*/}
                {/*    : <div className='new countMessages'>1</div>*/}
                {/*}*/}
            </div>
    )
}

export default DialogItem;
