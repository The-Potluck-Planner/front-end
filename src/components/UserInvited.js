import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getGuests } from '../store/actions'


export default function UserInvited() {
    const dispatch = useDispatch()
    const { guests } = useSelector(event => event.user)
    const { eventID } = useParams()
    useEffect(() => {
        dispatch(getGuests(eventID))
    }, [dispatch, eventID])

    return (
        <div>
           {guests && guests.map(guest => {
               return (
                   <>
                    <p>{guest.name}</p>
                   </>
               )
           })} 
        </div>
    )
}
