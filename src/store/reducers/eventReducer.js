import {
    GET_EVENTS_START,
    GET_EVENTS_SUCCESS,
    GET_EVENTS_FAILURE,
    ADD_EVENTS_START,
    ADD_EVENTS_SUCCESS,
    ADD_EVENTS_FAILURE,
    EDIT_EVENT_START,
    EDIT_EVENT_SUCCESS,
    EDIT_EVENT_FAILURE
} from '../actions'

const init = {
    events: [],
    rsvps: [],
    isEditing: false,
    isLoading: false,
    errors: ''
}

export const eventReducer = (state = init, action) => {
    switch(action.type) {
        case GET_EVENTS_START:
            return { ...state, isLoading: true, errors: '' }
        case GET_EVENTS_SUCCESS:
            return { ...state, isLoading: false, events: action.payload.organizedEvents, rsvps: action.payload.guestEvents }
        case GET_EVENTS_FAILURE:
            return { ...state, isLoading:false, errors: action.payload }
        case ADD_EVENTS_START:
            return { ...state, isLoading: true, errors: '' }
        case ADD_EVENTS_SUCCESS:
            return { ...state, isLoading: false, events: [...state.events, action.payload] }
        case ADD_EVENTS_FAILURE:
            return { ...state, isLoading:false, errors: action.payload }
        case EDIT_EVENT_START:
            return { ...state }
        case EDIT_EVENT_SUCCESS:
            return { ...state }
        case EDIT_EVENT_FAILURE:
            return { ...state }
        default: 
            return { ...state }
    }
}