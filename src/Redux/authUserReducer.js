const SET_USER_DATA = 'SET_USER_DATA';
const EXIT_PROFILE = 'EXIT_PROFILE';

const ADMIN = {
    email: 'sarah@gmail.com',
    password: '1234',
}

let initialState = {
    isAuth: false,
}

const authUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            if (action.data.email === ADMIN.email && action.data.password === ADMIN.password) {
                return{
                    ...state,
                    isAuth: true
                }
            }
            return state;
        case EXIT_PROFILE:
            return{
                ...state,
                isAuth: false
            }
        default:
            return state;
    }
}

export const setAuthUserActionCreator = (email, password) => {
    return{
        type: SET_USER_DATA,
        data: {email, password},
    }
}

export const exitProfileActionCreator = (isAuth) => {
    return{
        type: EXIT_PROFILE,
        isAuth
    }
}
export default authUserReducer;