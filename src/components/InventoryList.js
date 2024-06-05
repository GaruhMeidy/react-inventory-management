import React, { useState } from 'react';
import InventoryItem from './InventoryItem';

const InventoryList = ({ inventory, addItem, updateItem, deleteItem, openModal }) => {
  const [newItem, setNewItem] = useState({ title: '', price: '', stock: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem.title && newItem.price && newItem.stock) {
      addItem({ ...newItem, id: Date.now() });
      setNewItem({ title: '', price: '', stock: '' });
    }
  };

  return (
    <div className="p-5">
      <form onSubmit={handleSubmit} className="flex space-x-4 mb-5">
        <input type="text" name="title" value={newItem.title} onChange={handleChange} placeholder="Title" className="border p-2" />
        <input type="number" name="price" value={newItem.price} onChange={handleChange} placeholder="Price" className="border p-2" />
        <input type="number" name="stock" value={newItem.stock} onChange={handleChange} placeholder="Stock" className="border p-2" />
        <button type="submit" className="bg-blue-500 text-white p-2">Add Item</button>
      </form>
      <ul className="space-y-4">
        {inventory.map(item => (
          <InventoryItem 
            key={item.id} 
            item={item} 
            updateItem={updateItem} 
            deleteItem={deleteItem} 
            openModal={openModal} 
          />
        ))}
      </ul>
    </div>
  );
};

export default InventoryList;