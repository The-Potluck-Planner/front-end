import { combineReducers } from 'redux'
import { userReducer as user } from './userReducer'
import { eventReducer as event } from './eventReducer'
import { foodReducer as food } from './foodReducer'

export default combineReducers({
    user, event, food
})