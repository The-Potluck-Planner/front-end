import React from 'react'

function SingleEvent(props){

    const {title }=props
    const isEdit=false

    onInviteSubmit= evt=>{
        evt.preventDefault()
        console.log('invite a friend clicked')
    }

    onEditSubmit=evt=>{
        evt.preventDefault()
        isEdit=true

    }

    onDeleteSubmit=evt=>{
        evt.preventDefault()
        console.log('Delete event clicked')

    }
    return (
        <div>
            <button onClick={onInviteSubmit}>Invite a Friend</button> 
            <button onClick={onEditSubmit}> Edit Event</button>
            <button onClick={onDeletsubmit}>Delete Event</button>
           <div>
                

        
           
               </div>
        </div>
    )




}

export default SingleEvent