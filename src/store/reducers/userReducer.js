import {
    LOGIN_START,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    REGISTER_START,
    REGISTER_FAILURE,
    REGISTER_SUCCESS
} from '../actions'


const init = {
    name:'',
    id: 0,
    isValidating: false,
    errors:''
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
        default: 
            return { ...state }
    }
}