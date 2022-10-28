import React from "react";


const Message = (props) => {

    return(
        <div className={`message ${ props.fromMe ? 'fromMe' : 'notFromMe'}`}>
            {props.message} <br/>
            <span>{props.date}</span>
        </div>
    )
}

export  default Message;