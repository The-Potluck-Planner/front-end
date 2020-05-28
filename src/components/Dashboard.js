import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ListEvents from './ListEvents'
import { Link } from 'react-router-dom'
import '../scss/Dashboard.scss'

export default function Dashboard(props) {
    const { name } = useSelector((state) => state.user)
    const { events, rsvps } = useSelector((state) => state.event)
    const { push } = useHistory()


    return (
        <div className="dashboardContainer">
            <h1>Hello {name} </h1>
            <Link to='/addevent'><button className="createEventButton">Create an Event</button></Link>
            <div className="eventsContainer">
            <ListEvents eventsList='events'/>
            <ListEvents eventsList='events'/>
            </div>
       
            {/* <ListEvents eventsList='rsvps'/> */}

        </div>
    )
}
