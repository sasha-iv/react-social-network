import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {updateNewMessageBodyCreator, sendMessageCreator, unreadMessageCreator} from "../../../Redux/dialogsReducer";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage: (userId) => {
            dispatch(sendMessageCreator(userId))
        },
        unreadMessageBody: (userId) => {
            dispatch(unreadMessageCreator(userId));
        }
    }
}

const DialogsContainer = compose(connect(mapStateToProps, mapDispatchToProps) (Dialogs));

export  default DialogsContainer;