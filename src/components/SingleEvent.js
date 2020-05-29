import React, { useState } from 'react'
import Menu from './Menu'
import { useParams, useHistory } from 'react-router-dom'
import { useSelector, connect } from 'react-redux'
import { deleteEvent } from '../store/actions'
import Guests from './Guests'
import '../scss/SingleEvent.scss'

const menu = [
    {id:1, name:'Main dish', selected: false,}, 
    {id:2, name:'Main dish', selected: false,}, 
    {id:3, name:'Fried Chicken', selected: false,},
    {id:4, name:'Side dish', selected: false,},
    {id:5, name:'Side dish', selected: false,},
    {id:6, name:'Chips and Dip', selected: false,},
    {id:7, name:'Drinks/Ice', selected: false,},
    {id:8, name:'Plates/Utensils', selected: false,},
    {id:9, name:'Dessert', selected: false,},
]

function SingleEvent({ deleteEvent, events, isEditing, isLoading }) {
    const { push } = useHistory()
    const { id } = useParams()

    const event = events.filter(event => event.id == id)

    if(event.length === 0) {
        return <h2>Sorry, there was an error, please try again</h2>
    }
  
  const onInviteSubmit= evt=>{
        evt.preventDefault()
    }
  
    const onEditSubmit=evt=>{
        evt.preventDefault()

    }

    const onDeleteSubmit=evt=>{
        evt.preventDefault()
        const result = window.confirm('Are you sure you want to delete')
        if (result) {
            deleteEvent(id)
                .then(res => {
                    push('/events')
                })
        }
        
    }

    const guestSample={
        name: 'suzi',
        RSVP: false
    }

    return (
      
        <div   className="contentContainer" key={event[0].id}>
            <div className="eventDetails" >
            <h3>Event Details</h3>
            <p>Event: {event[0].title}</p>
            <p>Location:{event[0].location}</p>
            <p>Date: {event[0].month} {event[0].day} {event[0].year}</p>
            <p>Time: {event[0].time_From}-{event[0].time_To}</p>
            <button onClick={() => push(`/edit/${event[0].id}`)} >Edit Event</button>
            <div>
                <button disabled onClick={onEditSubmit}> Edit Event</button>
                <button onClick={onDeleteSubmit}>Delete Event</button>
            </div>
            </div>
                <div className="menuSection">
                <h3>Menu</h3>
                <Menu />
                </div>
                <div className="guestSection">
                <h3>Invitations/Guests</h3>
                <Guests info={guestSample}/>
                <button onClick={onInviteSubmit}>Invite a Friend</button> 
                </div>
        </div>
        
        
    )
}

const mapState = state => {
    return {
        events: state.event.events,
        isEditing: state.event.isEditing,
        isLoading: state.event.isLoading,
        errors: state.event.errors
    }
}

export default connect(mapState, { deleteEvent })(SingleEvent)
