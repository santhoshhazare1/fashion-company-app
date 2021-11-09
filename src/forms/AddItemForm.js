import React, { useState } from 'react'
import './styles.css'
import Img from '../images/ts_mensfashion_759.jpg'

const AddItemForm = props => {

    const initialFormState = { id: '', itemName: '', description: '', price: '', quantity: '', stockreceivedDate: '' }
    const [item, setItem] = useState(initialFormState)

    const handleInputChange = event => {
        const { name, value } = event.target

        setItem({ ...item, [name]: value })
    }

    return (
        <div className="center">
            <div >
                <img src={Img} alt="" style={{ position: "absolute", border: "1px solid gray", float: "right", left: "103%", height: "555px", boxShadow: "1px 2px 4px", top: "0%" }} />
            </div>
            <form
                onSubmit={event => {
                    event.preventDefault()
                    if (!item.itemName || !item.description || !item.price || !item.quantity || !item.stockreceivedDate) return

                    props.addItem(item)
                    setItem(initialFormState)
                }}
            >


                <label>Item Name</label>
                <div class="inputbox">
                    <input type="text" name="itemName" value={item.itemName} onChange={handleInputChange} />
                </div>
                <label>Description</label>
                <div class="inputbox">
                    <input type="text" name="description" value={item.description} onChange={handleInputChange} />
                </div>
                <label>Price</label>
                <div class="inputbox">
                    <input type="text" name="price" value={item.price} onChange={handleInputChange} />
                </div>
                <label>quantity</label>
                <div class="inputbox">
                    <input type="text" name="quantity" value={item.quantity} onChange={handleInputChange} />
                </div>
                <label>Stock Received Date</label>
                <div class="inputbox">
                    <input type="text" name="stockreceivedDate" value={item.stockreceivedDate} onChange={handleInputChange} />
                </div>
                <button className="button">Add new item</button>
            </form>
        </div>

    )
}

export default AddItemForm;