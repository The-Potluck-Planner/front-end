import {
    GET_EVENTS_START,
    GET_EVENTS_SUCCESS,
    GET_EVENTS_FAILURE,
    ADD_EVENTS_START,
    ADD_EVENTS_SUCCESS,
    ADD_EVENTS_FAILURE,
    EDIT_EVENT_START,
    EDIT_EVENT_SUCCESS,
    EDIT_EVENT_FAILURE,
    DELETE_EVENT_START,
    DELETE_EVENT_SUCCESS,
    DELETE_EVENT_FAILURE
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
            return { ...state, isEditing: true, isLoading: true, errors:'' }
        case EDIT_EVENT_SUCCESS:
            const newEvents = state.events.map(event => {
                if (action.payload.id === event.id) {
                    return action.payload
                }
                return event
            })
            return { ...state, isEditing: false, isLoading: false, events: newEvents }
        case EDIT_EVENT_FAILURE:
            return { ...state, isEditing:false, isLoading: false, errors: action.payload }
        case DELETE_EVENT_START:
            const lessEvents = state.events.filter(event => event.id !== action.payload )
            return { ...state, isLoading: true, events: lessEvents }
        case DELETE_EVENT_SUCCESS:
            return { ...state, isLoading: false }
        case DELETE_EVENT_FAILURE:
            return { ...state, isLoading: false, errors: action.payload }
        default: 
            return { ...state }
    }
}