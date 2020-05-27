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
            return err.response.request.status
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

export const getEvents = () => dispatch => {
    dispatch({ type: GET_EVENTS_START })

    axiosWithAuth()
        .get(`${BASE_URL}api/events`)
        .then(res => {
            dispatch({ type: GET_EVENTS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: GET_EVENTS_FAILURE, payload: err })
        })
}

export const ADD_EVENTS_START = "GET_EVENTS_START"
export const ADD_EVENTS_SUCCESS = "GET_EVENTS_SUCCESS"
export const ADD_EVENTS_FAILURE = "GET_EVENTS_FAILURE"