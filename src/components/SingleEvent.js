import React from 'react'
import Menu from './Menu'
import { useParams, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

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

export default function SingleEvent(props) {
    const { push } = useHistory()
    const { id } = useParams()
    const { events } = useSelector(state => state.event)

    const event = events.filter(event => event.id == id)
    console.log(id, events, event)

    if(event.length === 0) {
        return <h2>Sorry, there was an error, please try again</h2>
    }

    return (
        <div key={event[0].id}>
        <h3>Event Details</h3>
        <p>Event: {event[0].title}</p>
        <p>Location:{event[0].location}</p>
        <p>Date: {event[0].month} {event[0].day} {event[0].year}</p>
        <p>Time: {event[0].time_From}-{event[0].time_To}</p>
        <button onClick={() => push(`/edit/${event[0].id}`)} >Edit Event</button>
        <h3>Menu</h3>
        <Menu menu={menu}/>
        <h3>Invitations/Guests</h3>
        <p>TBD</p>
      </div>
        
    )
}
