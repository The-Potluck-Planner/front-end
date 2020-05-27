import axios from 'axios'
import { BASE_URL, axiosWithAuth } from '../../utils/axiosAuth'


//LOGIN AND REGISTER
export const REGISTER_START = 'REGISTER_START'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'

export const register = newUser => dispatch => {
    dispatch({ type: REGISTER_START })

    axios
        .post(`${BASE_URL}auth/register`, newUser)
        .then(res => {
            console.log(res.data)
            dispatch({ type: REGISTER_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: REGISTER_FAILURE, payload: err })
        })
}


export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const login = user => dispatch => {
    dispatch({ type: LOGIN_START })
    console.log("ACTION FIRED")
    axios
        .post(`${BASE_URL}auth/login`, user)
        .then(res => {
            console.log(res.data)
            localStorage.setItem('token', res.data.token)
            dispatch({ type: LOGIN_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err.response.data.message)
            dispatch({ type: LOGIN_FAILURE, payload: err.response.data.message })
        })
}