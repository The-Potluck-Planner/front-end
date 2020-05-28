import React, { useEffect,useState } from 'react'
import { useHistory } from 'react-router-dom'
import { axiosWithAuth, BASE_URL } from '../utils/axiosAuth'
import ListEvents from './ListEvents'
import AddEvent from './AddEvent'
import {Link,Switch,Route} from 'react-router-dom'


export default function Dashboard({name}) {
    const { push } = useHistory()
    const logOut = () => {
        localStorage.removeItem('token')
        push('login')
    }

    const [events, setEvents]=useState()

   

     useEffect(() => {
        axiosWithAuth()
           .get(`${BASE_URL}api/events`)
            .then(res => {
               setEvents(res.data)
        })
            .catch(err => console.log({err}))
     },[])

     if(events===undefined){
        return<></>
     }
    return (
        <div>
            <h1>Hello {name}</h1>
            <button onClick={logOut}>Log out</button>

           <Link to='/addevent'><button>Add an Event</button></Link>

            <h2>Events List</h2>


            {
                events.map((event,index) => {
                   return (
                   <ListEvents key={index} info={event}/>)
                })
          
            }
            
                
        
          
        </div>
    )
}
