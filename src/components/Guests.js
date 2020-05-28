import React from 'react'
import styled from 'styled-components'


function Guests(props){

    const RsvpIndicator=styled.span`
        height: 20px;
        width:20px;
        border-radius:50%;
        display:inline-block;

        ${props=>(props.RSVP===true ? `background-color: green`: `background-color:red`)}

    `
    console.log(props.info.RSVP)

    return(

        <div>
          <p>{props.info.name}</p>
          <p> RSVP:</p> 
           <RsvpIndicator RSVP={props.info.RSVP}></RsvpIndicator>
        </div>
    )


}

export default Guests