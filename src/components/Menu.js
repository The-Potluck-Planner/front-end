import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { axiosWithAuth, BASE_URL } from '../utils/axiosAuth'
import { getFoods, addFood, editFood, deleteFood } from '../store/actions'

const formInit = {
    name: '',
    quantity: '',
    category: '',
}

function Menu({ getFoods, addFood, editFood, deleteFood, menu, isEditing }) {
    let message
    const [adding, setAdding] = useState(false)
    const [editing, setEditing] = useState(false)
    const [selected, setSelected] = useState(menu)
    const [count, setCount] = useState(0)
    const { id } = useParams()
    const [form, setForm] = useState({...formInit, eventID: id})
    


    useEffect(() => {
        getFoods(id)
            // .then(res => {
            //     setSelected(res)
            // })
    }, [id, getFoods, count])

    // const toggleSelect = itemId => {
    //     const newTodos = selected.map(item => {
    //         if (itemId == item.id) {
    //             item.selected = !item.selected
    //             return item
    //         }
    //         return item
    //     })
        
    //     setSelected(newTodos)
    // }

    const handlesChanges = e => {
        const { name, value} = e.target
        setForm({ ...form, [name]:value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        //ADD MENU ITEM CODE HERE
        console.log('submitted')
        if (adding) {
            addFood(form)
                .then(res => {
                    setCount(count + 1)
                })
            setAdding(!adding)
            setForm({...formInit, eventID: id})
            
        } else if (editing) {
            editFood({
                eventID: Number(id),
                name: form.name,
                quantity: form.quantity,
                category: form.category
            }, form.id).then(res => {
                setCount(count + 1)
            })
            setForm({...formInit, eventID: id})
            setEditing(!editing)
        }

    }

    const handleEdit = item => {

        setForm({
            ...item
        })
        setEditing(!editing)
        
    }

    const handleDelete = id => {
        const res = window.confirm('Really want to delete the menu item?')
        if (res){
            deleteFood(id)
                .then(res => {
                    setCount(count + 1)
                })
        }
    }

    if (menu.length === 0) {
         message =  <h2>No menu items. Please add</h2>
    }



    return (
        <div>
            {menu.map( item => {
                return (
                    <div 
                        // onClick={() => toggleSelect(item.id)} key={item.id}  
                        className={item.selected ? 'selected': ''}>
                        <h4>{item.name}</h4>
                        <p>{item.category}</p>
                        <p>Quantity: {item.quantity}</p>
                        <button onClick={ e => handleEdit(item)}>Edit</button>
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                        </div>
                )
            })}
            {  message }
            <div className='menu-buttons'>
                <button onClick={() => setAdding(!adding) }>Add Menu Item</button>
            </div>
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
                        value={form.quantity}
                        onChange={handlesChanges}
                    />
                    </label>
                    <button >Edit</button>
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
                        value={form.quantity}
                        onChange={handlesChanges}
                    />
                    </label>
                    <button >ADD</button>
                </form>
                </>
             )}
        </div>
    )
}

const mapState = state => {
    return {
        menu: state.food.menu,
        isEditing: state.food.isEditing
    }
}

export default connect(mapState, { getFoods, addFood, editFood, deleteFood })(Menu)
