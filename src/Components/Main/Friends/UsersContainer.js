import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
    followActionCreator,
    unfollowActionCreator,
    setUsersActionCreator,
    filterFriendsActionCreator,
} from "../../../Redux/usersReducer";
import withAuthRedirect from '../../hoc/withAuthRedirect'


let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        filteredUsers: state.usersPage.filteredUsers,
        isAuth: state.auth.isAuth
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
        // setUsers: (users) => {
        //     dispatch(setUsersActionCreator(users))
        // },
        filterFriends: (isMine) => {
            dispatch(filterFriendsActionCreator(isMine))
        },
    }
}

// let AuthRedirectComponent = withAuthRedirect(Users);

export default connect(mapStateToProps, mapDispatchToProps) (Users);