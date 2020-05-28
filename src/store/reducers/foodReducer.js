import {
    GET_FOODS_START,
    GET_FOODS_SUCCESS,
    GET_FOODS_FAILURE,
    ADD_FOOD_START,
    ADD_FOOD_SUCCESS,
    ADD_FOOD_FAILURE,
    EDIT_FOOD_START,
    EDIT_FOOD_SUCCESS,
    EDIT_FOOD_FAILURE,
    DELETE_FOOD_START,
    DELETE_FOOD_SUCCESS,
    DELETE_FOOD_FAILURE
} from '../actions'

const init = {
    menu: [],
    errors: '',
    isEditing: false,
    isLoading: false,
}

export const foodReducer = (state = init, action) => {
    switch(action.type) {
        case GET_FOODS_START:
            return { ...state }
        case GET_FOODS_SUCCESS:
            return { ...state }
        case GET_FOODS_FAILURE:
            return { ...state }
        case EDIT_FOOD_START:
            return { ...state }
        case EDIT_FOOD_SUCCESS:
            return { ...state }
        case EDIT_FOOD_FAILURE:
            return { ...state }
        case ADD_FOOD_START:
            return { ...state }
        case ADD_FOOD_SUCCESS:
            return { ...state }
        case ADD_FOOD_FAILURE:
            return { ...state }
        case DELETE_FOOD_START:
            return { ...state }
        case DELETE_FOOD_SUCCESS:
            return { ...state }
        case DELETE_FOOD_FAILURE:
            return { ...state }
        default:
            return { ...state }
    }
}