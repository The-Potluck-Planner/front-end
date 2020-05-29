import React, { useEffect } from 'react'
import { axiosWithAuth, BASE_URL } from '../utils/axiosAuth'

const testfood = {
    eventID: 1,
    category: 'Main Dish',
    quantity: '3',
    name: 'BBQ Chicken'
}

function AddMenuItem(props) {

    useEffect(() => {
        axiosWithAuth()
            .post(`${BASE_URL}api/food`, testfood)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log({err}))
    }, [])

    return (
        <div>
            
        </div>
    )
}
export default AddMenuItem