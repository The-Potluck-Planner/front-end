import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ListEvents from './ListEvents'
import { Link } from 'react-router-dom'

export default function Dashboard(props) {
    const { name } = useSelector((state) => state.user)
    const { events, rsvps } = useSelector((state) => state.event)
    const { push } = useHistory()


    return (
        <div>
            <h1>Hello {name} </h1>
            <ListEvents eventsList='events'/>
            <Link to='/addevent'><button>Add an Event</button></Link>
            {/* <ListEvents eventsList='rsvps'/> */}

        </div>
    )
}
