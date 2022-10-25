import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
    followActionCreator,
    unfollowActionCreator,
    setUsersActionCreator,
    filterFriendsActionCreator,
} from "../../../Redux/usersReducer";

let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        filteredUsers: state.usersPage.filteredUsers
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        followUser: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unfollowUser: (userId) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        filterFriends: (isMine) => {
            dispatch(filterFriendsActionCreator(isMine))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Users)