import React, { useEffect,useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { axiosWithAuth, BASE_URL } from '../utils/axiosAuth'
import ListEvents from './ListEvents'
import AddEvent from './AddEvent'
import {Link,Switch,Route} from 'react-router-dom'



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

      <h2>Events List</h2>
            <ListEvents />

           <Link to='/addevent'><button>Add an Event</button></Link>

        </div>
    )
}
