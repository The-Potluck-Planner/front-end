import React, { useState } from 'react'

function Menu(props) {

    const [selected, setSelected] = useState(props.menu)

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
