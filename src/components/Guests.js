import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getGuests } from '../store/actions'
import styled from 'styled-components'


function Guests(){
    const RsvpIndicator=styled.span`
        height: 20px;
        width:20px;
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
                   <>
                    <p>{guest.name}</p>
                    <RsvpIndicator RSVP={guest.RSVP}></RsvpIndicator>
                   </>
               )
           })} 
        </div>
    )


}

export default Guests