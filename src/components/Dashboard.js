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
            <div className='dashboardHeader'>
            <h2>Hello {name} </h2>
            <Link to='/addevent'><button className="createEventButton">Create an Event</button></Link>
             </div>
            <div className="eventsContainer">
            <ListEvents eventsList={events} title='Hosted Events'
            />
            <ListEvents eventsList={rsvps} title='Invitations'
            />
            </div>
       
            {/* <ListEvents eventsList='rsvps'/> */}

        </div>
    )
}
