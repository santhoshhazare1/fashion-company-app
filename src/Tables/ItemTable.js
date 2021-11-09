import React from 'react'

const ItemTable = props => (
  <table>
    <thead>
      <tr>
        <th>Item Name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Stock Received Date</th>
        </tr>
    </thead>
    <tbody>
      {props.items.length > 0 ? (
        props.items.map(item => (
          <tr key={item.id}>
            <td>{item.itemName}</td>
            <td>{item.description}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td>{item.stockreceivedDate}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(item)
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteItem(item.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Items</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default ItemTable;