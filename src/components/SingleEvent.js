import React from 'react'
import Menu from './Menu'

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

export default function SingleEvent({event}) {
    return (
        <div>
            <h2>Event Details</h2>
            <h3>{event.name}</h3>
            <p>{event.description}</p>
            <Menu menu={menu}/>
        </div>
    )
}
