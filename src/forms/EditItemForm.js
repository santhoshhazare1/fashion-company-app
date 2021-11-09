import React, { useState, useEffect } from 'react'

const EditItemForm = props => {
  const [item, setItem] = useState(props.currentItem)

  useEffect(
    () => {
      setItem(props.currentItem)
    },
    [props]
  )


  const handleInputChange = event => {
    const { name, value } = event.target

    setItem({ ...item, [name]: value })
  }

  return (
    <div className="center">
      <div>
        <form
          onSubmit={event => {
            event.preventDefault()

            props.updateItem(item.id, item)
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
          <label>Quantity</label>
          <div class="inputbox">
            <input type="text" name="quantity" value={item.quantity} onChange={handleInputChange} />
          </div>
          <label>Stock Received Date</label>
          <div class="inputbox">
            <input type="text" name="stockreceivedDate" value={item.stockreceivedDate} onChange={handleInputChange} />
          </div>
          <div class="inputbox">
            <button >Update item</button>
            <button onClick={() => props.setEditing(false)} >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditItemForm;