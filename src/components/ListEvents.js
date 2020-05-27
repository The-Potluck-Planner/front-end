import React from 'react'

function ListEvents(props){
    
   
     console.log(props)
    return (
         <div>
           <p>Event: {props.info.title}</p>
           <p>Location:{props.info.location}</p>
           <p>Date: {props.info.month} {props.info.day} {props.info.year}</p>
           <p>Time: {props.info.time_From}-{props.info.time_To}</p>
         </div>
    )

}

export default ListEvents