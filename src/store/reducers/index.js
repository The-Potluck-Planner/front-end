import {
    LOGIN_START,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    REGISTER_START,
    REGISTER_FAILURE,
    REGISTER_SUCCESS
} from '../actions'


const init = {
    username: '',
    password: '',
    passwordConfirm: '',
    name:'',
    isWaiting: false,
}

export const userReducer = (state = init, action) => {
    switch(action.type) {
        case LOGIN_START:
            return { ...state }
        case LOGIN_SUCCESS:
            return { ...state }
        case LOGIN_FAILURE:
            return { ...state }
        case REGISTER_START:
            return { ...state }
        case REGISTER_SUCCESS:
            return { ...state }
        case REGISTER_FAILURE:
            return { ...state }
        default: 
            return { ...state }
    }
}