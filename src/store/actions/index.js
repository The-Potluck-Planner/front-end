import axios from 'axios'
import { BASE_URL, axiosWithAuth } from '../../utils/axiosAuth'


//LOGIN AND REGISTER
export const REGISTER_START = 'REGISTER_START'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'

export const register = newUser => dispatch => {
    dispatch({ type: REGISTER_START })

    return axios
        .post(`${BASE_URL}auth/register`, newUser)
        .then(res => {
            dispatch({ type: REGISTER_SUCCESS, payload: res.data })
            return res.status
        })
        .catch(err => {
            dispatch({ type: REGISTER_FAILURE, payload: err.response.data.message })
            return {err}
        })
}

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const login = user => dispatch => {
    dispatch({ type: LOGIN_START })
    return axios
        .post(`${BASE_URL}auth/login`, user)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            dispatch({ type: LOGIN_SUCCESS, payload: res.data })
            return res.status
        })
        .catch(err => {
            dispatch({ type: LOGIN_FAILURE, payload: err.response.data.message })
            return err.response.request.status
        })
}

//#################  EVENTS  #######################

export const GET_EVENTS_START = "GET_EVENTS_START"
export const GET_EVENTS_SUCCESS = "GET_EVENTS_SUCCESS"
export const GET_EVENTS_FAILURE = "GET_EVENTS_FAILURE"

export const getEvents = userID => dispatch => {
    dispatch({ type: GET_EVENTS_START })

    axiosWithAuth()
        .get(`${BASE_URL}api/events/users/${userID}`)
        .then(res => {
            console.log(res.data)
           dispatch({ type: GET_EVENTS_SUCCESS, payload: res.data })
           
        })
        .catch(err => {
            dispatch({ type: GET_EVENTS_FAILURE, payload: {err} })
            
        })
}

export const ADD_EVENTS_START = "GET_EVENTS_START"
export const ADD_EVENTS_SUCCESS = "GET_EVENTS_SUCCESS"
export const ADD_EVENTS_FAILURE = "GET_EVENTS_FAILURE"

export const addEvent = event => dispatch => {
    dispatch({ type:ADD_EVENTS_START })
    return axiosWithAuth()
        .post(`${BASE_URL}api/events`, event)
        .then(res => {
            console.log('FROM ACTIONS', res.data)
            dispatch({ type: ADD_EVENTS_SUCCESS, payload: res.data })
        })
        .catch(err => console.log({err}))
}

export const EDIT_EVENT_START = "EDIT_EVENT_START"
export const EDIT_EVENT_SUCCESS = "EDIT_EVENT_SUCCESS"
export const EDIT_EVENT_FAILURE = "EDIT_EVENT_FAILURE"

export const editEvent = (event, id) => dispatch => {
    dispatch({ type: EDIT_EVENT_START })

    return axiosWithAuth()
            .put(`${BASE_URL}api/events/${id}`, event)
            .then(res => {
                console.log(res.data)
                dispatch({ type: EDIT_EVENT_SUCCESS, payload: res.data })
                return res.data
            })
            .catch(err => {
                dispatch({ type: EDIT_EVENT_FAILURE, payload: {err} })
                return {err}
            })
    //do stuff here
}


//#################  FOOD  #######################

//GET
export const GET_FOODS_START = 'GET_FOODS_START'
export const GET_FOODS_SUCCESS = 'GET_FOODS_SUCCESS'
export const GET_FOODS_FAILURE = 'GET_FOODS_FAILURE'

export const getFoods = () => {

}

//POST
export const ADD_FOOD_START = 'ADD_FOOD_START'
export const ADD_FOOD_SUCCESS = 'ADD_FOOD_SUCCESS'
export const ADD_FOOD_FAILURE = 'ADD_FOOD_FAILURE'

export const addFood = food => {

}

//PUT
export const EDIT_FOOD_START = 'EDIT_FOOD_START'
export const EDIT_FOOD_SUCCESS = 'EDIT_FOOD_SUCCESS'
export const EDIT_FOOD_FAILURE = 'EDIT_FOOD_FAILURE'

export const editFood = foodID => {
    
}

//Delete
export const DELETE_FOOD_START = 'DELETE_FOOD_START'
export const DELETE_FOOD_SUCCESS = 'DELETE_FOOD_SUCCESS'
export const DELETE_FOOD_FAILURE = 'DELETE_FOOD_FAILURE'

export const deleteFood = foodID => {

}