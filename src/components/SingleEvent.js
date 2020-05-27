import React from 'react'

export default function SingleEvent({event}) {
    return (
        <div>
            <h1>{event.name}</h1>
            <p>{event.description}</p>
        </div>
    )
}
