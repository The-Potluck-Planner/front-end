import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { axiosWithAuth, BASE_URL } from '../utils/axiosAuth'
import ListEvents from './ListEvents'
import AddEvent from './AddEvent'


export default function Dashboard(props) {
    const { name } = useSelector((state) => state.user);
    const { push } = useHistory()
    const logOut = () => {
        localStorage.removeItem('token')
        push('login')
    }

    return (
        <div>
            <h1>Hello {name} </h1>
            <button onClick={logOut}>Log out</button>
            <ListEvents />
            <AddEvent />
        </div>
    )
}
