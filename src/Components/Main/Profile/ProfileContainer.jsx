import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
    }
}

export default connect(mapStateToProps) (Profile);