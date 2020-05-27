import {
    GET_EVENTS_START,
    GET_EVENTS_SUCCESS,
    GET_EVENTS_FAILURE,
    ADD_EVENTS_START,
    ADD_EVENTS_SUCCESS,
    ADD_EVENTS_FAILURE
} from '../actions'

const init = {
    events: [],
    isEditing: false,
    isLoading: false,
    errors: ''
}

export const eventReducer = (state = init, action) => {
    switch(action.type) {
        case GET_EVENTS_START:
            return { ...state, isLoading: true, errors: '' }
        case GET_EVENTS_SUCCESS:
            return { ...state, isLoading: false, events: action.payload }
        case GET_EVENTS_FAILURE:
            return { ...state, isLoading:false, errors: action.payload }
        case ADD_EVENTS_START:
            return { ...state, isLoading: true, errors: '' }
        case ADD_EVENTS_SUCCESS:
            return { ...state, isLoading: false }
        case ADD_EVENTS_FAILURE:
            return { ...state, isLoading:false, errors: action.payload }
        default: 
            return { ...state }
    }
}