import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Dashboard({name}) {
    const { push } = useHistory()
    const logOut = () => {
        localStorage.removeItem('token')
        push('login')
    }
    return (
        <div>
            <h1>Hello {name}</h1>
            <button onClick={logOut}>Log out</button>
        </div>
    )
}
