import React, { useState, Fragment } from 'react'
import AddItemForm from '../forms/AddItemForm'
import EditItemForm from '../forms/EditItemForm'
import Table from '../Tables/table'
import './styles.css'

const FashionApp = () => {

	const columns = [
		{ accessor: 'itemName', label: 'Item Name' },
		{ accessor: 'description', label: 'Description' },
		{ accessor: 'quantity', label: 'Quantity', },
		{ accessor: 'price', label: 'Price', },
		{ accessor: 'stockreceivedDate', label: 'Stock Received Date' },
	]

	const itemData = [
		{ id: 1, itemName: 'CottonJean', description: 'it is a cotton', price: '2420', quantity: 'Best', stockreceivedDate: '2/12/2021' },

	]

	const initialFormState = { id: '', itemName: '', description: '', price: '', quantity: '', stockreceivedDate: '' }

	// Setting state
	const [items, setItems] = useState(itemData)
	const [currentItem, setCurrentItem] = useState(initialFormState)
	const [editing, setEditing] = useState(false)

	// CRUD operations
	const addItem = item => {
		item.id = items.length + 1
		setItems([...items, item])
	}

	const deleteItem = id => {
		setEditing(false)

		setItems(items.filter(item => item.id !== id))
	}

	const updateItem = (id, updatedItem) => {
		setEditing(false)

		setItems(items.map(item => (item.id === id ? updatedItem : item)))
	}

	const editRow = item => {
		setEditing(true)

		setCurrentItem({ id: item.id, itemName: item.itemName, description: item.description, price: item.price, quantity: item.quantity, stockreceivedDate: item.stockreceivedDate })
	}

	return (
		<div>
			<h1 >High Fashions</h1>
			<div >
				<div >
					{editing ? (
						<Fragment>
							<h2>Edit Item</h2>
							<EditItemForm
								editing={editing}
								setEditing={setEditing}
								currentItem={currentItem}
								updateItem={updateItem}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add item</h2>
							<AddItemForm addItem={addItem} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>Item List</h2>
					<Table rows={items} columns={columns} editRow={editRow} deleteItem={deleteItem} />
				</div>
			</div>
		</div>
	)
}

export default FashionApp;