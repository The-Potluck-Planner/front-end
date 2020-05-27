import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getEvents } from '../store/actions'
import SingleEvent from './SingleEvent'

function ListEvents({getEvents, events, isLoading, errors}) {

    useEffect(() => {
        getEvents()
    },[getEvents])

    if (isLoading){
        return <h2>Loading events...</h2>
    } else if (errors) {
        return (
            <>
            <h2>Uh oh, something went wrong</h2>
            <p>{errors}</p>
            </>
        )
    }

    return (
        <div>
            <h2>List of events</h2>
            {events && events.map(event => <SingleEvent event={event} key={event.id} /> )}
        </div>
    )
}

    const mapState = state => {
        return ({
            events: state.event.events,
            isLoading: state.event.isLoading,
            errors: state.event.errors,
        })
    }

export default connect(mapState, { getEvents })(ListEvents)
