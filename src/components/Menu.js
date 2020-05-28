import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { axiosWithAuth, BASE_URL } from '../utils/axiosAuth'

function Menu(props) {

    const [selected, setSelected] = useState(props.menu)
    const { id } = useParams()


    useEffect(() => {
        axiosWithAuth()
            .get(`${BASE_URL}api/events/${id}/food`)
            .then(res => console.log(res.data))
            .catch(err => console.log({err}))
    }, [id])

    const toggleSelect = itemId => {
        const newTodos = selected.map(item => {
            if (itemId == item.id) {
                item.selected = !item.selected
                return item
            }
            return item
        })
        
        setSelected(newTodos)
    }



    return (
        <div>
            {selected.map((item, index) => {
                return (
                    <li onClick={() => toggleSelect(item.id)} key={item.id}  className={item.selected ? 'selected': ''}>{item.name}</li>
                )
            })}
        </div>
    )
}

export default Menu
