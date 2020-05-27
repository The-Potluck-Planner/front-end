import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { axiosWithAuth, BASE_URL } from '../utils/axiosAuth'

export default function Dashboard({name}) {
    const { push } = useHistory()
    const logOut = () => {
        localStorage.removeItem('token')
        push('login')
    }

    useEffect(() => {
        axiosWithAuth()
            .get(`${BASE_URL}api/events`)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log({err}))
    }, [])

    return (
        <div>
            <h1>Hello {name}</h1>
            <button onClick={logOut}>Log out</button>
        </div>
    )
}
