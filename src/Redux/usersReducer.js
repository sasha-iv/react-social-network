import user1 from "../images/user1.jpg";
import user2 from "../images/user2.jpg";
import user3 from "../images/user3.jpg";
import user4 from "../images/user4.jpg";
import user5 from "../images/user5.jpg";
import user6 from "../images/user6.jpg";

import user7 from "../images/user7.jpg";
import user8 from "../images/user8.jpg";
import user9 from "../images/user9.jpg";
import user10 from "../images/user10.jpg";
import user11 from "../images/user11.jpg";
import user12 from "../images/user12.jpg";
import user13 from "../images/user13.jpg";
import user14 from "../images/user14.jpg";
import user15 from "../images/user15.jpg";
import user16 from "../images/user16.jpg";
import user17 from "../images/user17.jpg";
import user18 from "../images/user18.jpg";
import user19 from "../images/user19.jpg";
import user20 from "../images/user20.jpg";


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const USERS_LIST = [
    {
        id: 1,
        userPhoto: user1,
        followed: true,
        name: 'Maria Tor',
        location: 'Ukraine',
        birthday: '10.01.1992',
        phoneNumber: '+38 098 111 34 42',
        email: 'mary@gmail.com',
        hobby: 'read a book'

    },
    {
        id: 2,
        userPhoto: user2,
        followed: true,
        name: 'Tom Smith',
        location: 'USA',
        birthday: '11.06.1990',
        phoneNumber: '+38 095 262 63 77',
        email: 'tom@gmail.com',
        hobby: 'run and sport'
    },
    {
        id: 3,
        userPhoto: user3,
        followed: true,
        name: 'John Miller',
        location: 'Germany',
        birthday: '03.11.1995',
        phoneNumber: '+38 097 242 64 79',
        email: 'john@gmail.com',
        hobby: 'playing the piano'
    },
    {
        id: 4,
        userPhoto: user4,
        followed: true,
        name: 'Mia Jonson',
        location: 'USA',
        birthday: '06.12.1993',
        phoneNumber: '+38 098 942 94 99',
        email: 'mia@gmail.com',
        hobby: 'travelling'
    },
    {
        id: 5,
        userPhoto: user5,
        followed: true,
        name: 'Bri Garden',
        location: 'France',
        birthday: '16.07.1996',
        phoneNumber: '+38 050 952 54 95',
        email: 'bri@gmail.com',
        hobby: 'travelling and fitness'
    },
    {
        id: 6,
        userPhoto: user6,
        followed: true,
        name: 'Joi Lambert',
        location: 'Great Britain',
        birthday: '09.08.1991',
        phoneNumber: '+38 095 911 14 19',
        email: 'joi@gmail.com',
        hobby: 'playing football'
    },
    {
        id: 7,
        userPhoto: user7,
        followed: false,
        name: 'Daniel Rout',
        location: 'USA',
        birthday: '17.10.1989',
        phoneNumber: '+38 098 111 22 99',
        email: 'daniel@gmail.com',
        hobby: 'travelling and sport'
    },
    {
        id: 8,
        userPhoto: user8,
        followed: false,
        name: 'Mike Monte',
        location: 'France',
        birthday: '06.03.1994',
        phoneNumber: '+38 067 111 44 77',
        email: 'mike@gmail.com',
        hobby: 'playing the guitar'
    },
    {
        id: 9,
        userPhoto: user9,
        followed: false,
        name: 'Loren Castillo',
        location: 'Italy',
        birthday: '18.06.1993',
        phoneNumber: '+38 098 777 88 88',
        email: 'loren@gmail.com',
        hobby: 'cooking'
    },
    {
        id: 10,
        userPhoto: user10,
        followed: false,
        name: 'Janette Rick',
        location: 'USA',
        birthday: '01.02.1996',
        phoneNumber: '+38 050 444 33 33',
        email: 'janette@gmail.com',
        hobby: 'walk and fitness'
    },
    {
        id: 11,
        userPhoto: user11,
        followed: false,
        name: 'Kate Evelin',
        location: 'France',
        birthday: '09.04.1995',
        phoneNumber: '+38 050 555 33 313',
        email: 'kate@gmail.com',
        hobby: 'cooking and walk'
    },
    {
        id: 12,
        userPhoto: user12,
        followed: false,
        name: 'Zoi Morgan',
        location: 'Germany',
        birthday: '05.05.1996',
        phoneNumber: '+38 050 777 55 55',
        email: 'zoi@gmail.com',
        hobby: 'ride a bike'
    },
    {
        id: 13,
        userPhoto: user13,
        followed: true,
        name: 'Patricia Lebsack',
        location: 'France',
        birthday: '02.08.1998',
        phoneNumber: '+38 099 333 77 3773',
        email: 'patricia@gmail.com',
        hobby: 'watching films'
    },
    {
        id: 14,
        userPhoto: user14,
        followed: true,
        name: 'Ervin Howell',
        location: 'Germany',
        birthday: '14.06.1998',
        phoneNumber: '+38 099 234 45 56',
        email: 'ervin@gmail.com',
        hobby: 'sport and travelling'
    },
    {
        id: 15,
        userPhoto: user15,
        followed: true,
        name: 'Leanne Graham',
        location: 'Germany',
        birthday: '11.12.1996',
        phoneNumber: '+38 067 888 44 44',
        email: 'leanne@gmail.com',
        hobby: 'fitness and walk'
    },
    {
        id: 16,
        userPhoto: user16,
        followed: false,
        name: 'Kurtis Weissnat',
        location: 'Germany',
        birthday: '13.07.1997',
        phoneNumber: '+38 095 776 88 99',
        email: 'kurtis@gmail.com',
        hobby: 'playing football'
    },
    {
        id: 17,
        userPhoto: user17,
        followed: true,
        name: 'Dennis Donovan',
        location: 'Germany',
        birthday: '23.04.1996',
        phoneNumber: '+38 067 333 22 11',
        email: 'dennis@gmail.com',
        hobby: 'ride a bike'
    },
    {
        id: 18,
        userPhoto: user18,
        followed: true,
        name: 'Nicholas Sparks',
        location: 'Germany',
        birthday: '06.02.1997',
        phoneNumber: '+38 068 999 88 77',
        email: 'nic@gmail.com',
        hobby: 'driving a car'
    },
    {
        id: 19,
        userPhoto: user19,
        followed: false,
        name: 'Karolina Ripper',
        location: 'Germany',
        birthday: '25.05.1994',
        phoneNumber: '+38 050 666 33 66',
        email: 'karolina@gmail.com',
        hobby: 'ride a horse'
    },
    {
        id: 20,
        userPhoto: user20,
        followed: true,
        name: 'Victor Clark',
        location: 'Germany',
        birthday: '05.09.1991',
        phoneNumber: '+38 099 111 44 77',
        email: 'victor@gmail.com',
        hobby: 'driving a car'
    },
]

const FILTER_FRIENDS_ACTION_CREATOR = 'FILTER_FRIENDS_ACTION_CREATOR';

let initialState = {
    users: USERS_LIST
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId){
                        return {...user, followed: false}
                    }
                    return user;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId){
                        return {...user, followed: true}
                    }
                    return user;
                })
            }
        }
        case SET_USERS: {
            return{
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        case FILTER_FRIENDS_ACTION_CREATOR: {
            if (!action.isMine) {
                return {
                    ...state,
                    users: USERS_LIST,
                }
            }

            let filteredList = state.users.filter(user => user.followed === true);

            return {
                ...state,
                users: filteredList,
            }
        }
        default:
            return state;
    }
}

export const followActionCreator = (userId) => {
    return {
        type: FOLLOW,
        userId: userId
    }
}
export const unfollowActionCreator = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId
    }
}
export const setUsersActionCreator = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}
export const filterFriendsActionCreator = (isMine) => {
    return{
        type: FILTER_FRIENDS_ACTION_CREATOR,
        isMine: isMine
    }
}

export default usersReducer;