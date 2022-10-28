import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {exitProfileActionCreator, setAuthUserActionCreator} from "../../Redux/authUserReducer";

const HeaderContainer = (props) => {
    return(
        <Header exit={props.exitProfileActionCreator} isAuth={props.isAuth} />
    )

}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    email: state.auth.email,
    password: state.auth.password
})

export default connect(mapStateToProps, {setAuthUserActionCreator, exitProfileActionCreator}) (HeaderContainer);