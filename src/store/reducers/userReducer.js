import {
    LOGIN_START,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    REGISTER_START,
    REGISTER_FAILURE,
    REGISTER_SUCCESS,
    GET_USERS_START,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE,
    INVITE_USER_START,
    INVITE_USER_SUCCESS,
    INVITE_USER_FAILURE,
    GET_GUESTS_START,
    GET_GUESTS_SUCCESS,
    GET_GUESTS_FAILURE
} from '../actions'


const init = {
    name:'',
    id: 0,
    isValidating: false,
    errors:'',
    isLoading: false,
    users: [],
    guests: [] 
}

export const userReducer = (state = init, action) => {
    switch(action.type) {
        case LOGIN_START:
            return { ...state, isValidating: true, errors: '' }
        case LOGIN_SUCCESS:
            return { ...state, isValidating: false, id: action.payload.id, name: action.payload.name ,errors: '' }
        case LOGIN_FAILURE:
            return { ...state, isValidating:false, errors: action.payload }
        case REGISTER_START:
            return { ...state }
        case REGISTER_SUCCESS:
            return { ...state }
        case REGISTER_FAILURE:
            return { ...state }
        case GET_USERS_START:
            return { ...state, isLoading: true}
        case GET_USERS_SUCCESS:
            return { ...state, isLoading: false, users: action.payload }
        case GET_USERS_FAILURE:
            return { ...state, isLoading: false, errors: action.payload }
        case INVITE_USER_START:
            return { ...state, isLoading: true }
        case INVITE_USER_SUCCESS:
            return { ...state, isLoading: false}
        case INVITE_USER_FAILURE:
            return { ...state, isLoading: false, errors: action.payload}
        case GET_GUESTS_START:
            return { ...state, isLoading: true }
        case GET_GUESTS_SUCCESS:
            return { ...state, isLoading: false, guests: action.payload }
        case GET_GUESTS_FAILURE:
            return { ...state, isLoading: false, errors: action.payload }
        default: 
            return { ...state }
    }
}