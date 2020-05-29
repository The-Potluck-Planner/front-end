import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getGuests } from '../store/actions'
import styled from 'styled-components'
import '../scss/Guests.scss'


function Guests(){
    const RsvpIndicator=styled.span`
        height: 15px;
        width:15px;
        border-radius:50%;
        display:inline-block;

        ${props=>(props.RSVP===true ? `background-color: green`: `background-color:red`)}

    `
    const dispatch = useDispatch()
    const { guests } = useSelector(event => event.user)
    const { id } = useParams()
    
    useEffect(() => {
        dispatch(getGuests(id))
    }, [dispatch, id])

    return(

        <div>
            {guests && guests.map(guest => {
               return (
                   <div className='guestDisplay'>
                    <p>{guest.name}   RSVP: <RsvpIndicator RSVP={guest.RSVP}></RsvpIndicator></p>
                  
                   </div>
               )
           })} 
        </div>
    )


}

export default Guests