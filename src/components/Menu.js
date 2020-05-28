import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { axiosWithAuth, BASE_URL } from '../utils/axiosAuth'

const formInit = {
    name: '',
    quantitiy: '',
    category: '',
}

function Menu(props) {
    const [adding, setAdding] = useState(false)
    const [editing, setEditing] = useState(false)
    const [selected, setSelected] = useState(props.menu)
    const { id } = useParams()
    const [form, setForm] = useState({...formInit, eventID: id})
    


    useEffect(() => {
        axiosWithAuth()
            .get(`${BASE_URL}api/events/${id}/food`)
            .then(res => {
                if (res.data.length) {
                    setSelected(res.data)
                }
            })
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

    const handlesChanges = e => {
        const { name, value} = e.target
        setForm({ ...form, [name]:value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        //ADD MENU ITEM CODE HERE

    }



    return (
        <div>
            {selected.map((item, index) => {
                return (
                    <li onClick={() => toggleSelect(item.id)} key={item.id}  className={item.selected ? 'selected': ''}>{item.name}</li>
                )
            })}

            {/* ##### EDIT FORM */
             editing &&(
                 <>
                 <h3>Edit Menu Item</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='name'>Menu Item
                    <input
                        id='name'
                        type='text'
                        name='name'
                        value={form.name}
                        onChange={handlesChanges}
                    />
                    </label>
                    <label htmlFor='category'>Category
                    <input
                        id='category'
                        type='text'
                        name='category'
                        value={form.category}
                        onChange={handlesChanges}
                    />
                    </label>
                    <label htmlFor='quantity'>Quantity
                    <input
                        id='quantity'
                        type='text'
                        name='quantity'
                        value={form.quantitiy}
                        onChange={handlesChanges}
                    />
                    </label>
                </form>
                </>
            )}



            {/* ##### ADD FORM */
             adding && (
                 <>
                 <h3>Add New Menu Item</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='name'>Menu Item
                    <input
                        id='name'
                        type='text'
                        name='name'
                        value={form.name}
                        onChange={handlesChanges}
                    />
                    </label>
                    <label htmlFor='category'>Category
                    <input
                        id='category'
                        type='text'
                        name='category'
                        value={form.category}
                        onChange={handlesChanges}
                    />
                    </label>
                    <label htmlFor='quantity'>Quantity
                    <input
                        id='quantity'
                        type='text'
                        name='quantity'
                        value={form.quantitiy}
                        onChange={handlesChanges}
                    />
                    </label>
                </form>
                </>
             )}
        </div>
    )
}

export default Menu
