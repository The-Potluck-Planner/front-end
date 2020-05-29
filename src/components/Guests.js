import React from 'react'
import styled from 'styled-components'
import '../scss/Guests.scss'


function Guests(props){

    const RsvpIndicator=styled.span`
        height: 15px;
        width:15px;
        border-radius:50%;
        display:inline-block;

        ${props=>(props.RSVP===true ? `background-color: green`: `background-color:red`)}

    `
    console.log(props.info.RSVP)

    return(

        <div className="guestDisplay">
          <p>{props.info.name}</p>
          <p> RSVP: <RsvpIndicator RSVP={props.info.RSVP}></RsvpIndicator></p> 
          
        </div>
    )


}

export default Guests