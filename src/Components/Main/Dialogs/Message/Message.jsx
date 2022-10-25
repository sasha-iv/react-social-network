import React from "react";


const Message = (props) => {
    // console.log(props.fromMe);

    return(
        <div className={`message ${ props.fromMe ? 'fromMe' : 'notFromMe'}`}>
            {props.message}
        </div>
    )
}

export  default Message;