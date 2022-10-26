import React from "react";


const Message = (props) => {

    return(
        <div className={`message ${ props.fromMe ? 'fromMe' : 'notFromMe'}`}>
            {props.message}
        </div>
    )
}

export  default Message;