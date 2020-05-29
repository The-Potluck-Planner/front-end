import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getUsers, inviteUser as invite } from '../store/actions'

export default function UserList() {
    const dispatch = useDispatch()
    const { users } = useSelector(state => state.user)
    const { id } = useParams()


    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    const inviteUser = userID => {
        //inviteUserStuff
        console.log('invited =>', id, userID)
        dispatch(invite(id, {userID: userID}))
    }

    return (
        <>
        {users.map(user => {
            return (
                <div key={user.id}>
                <p>{user.name}</p>
                <button onClick={() => inviteUser(user.id)}>Invite</button>
                </div>
                
            )
        })}
        </>
    )
}
