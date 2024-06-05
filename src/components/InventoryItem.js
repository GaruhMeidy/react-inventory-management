import React, { useState } from 'react';

const InventoryItem = ({ item, updateItem, deleteItem, openModal }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedItem, setEditedItem] = useState(item);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedItem({ ...editedItem, [name]: value });
  };

  const handleSave = () => {
    updateItem(editedItem);
    setIsEditing(false);
  };

  return (
    <li className="border p-4 flex justify-between items-center">
      {isEditing ? (
        <>
          <input type="text" name="title" value={editedItem.title} onChange={handleChange} className="border p-2" />
          <input type="number" name="price" value={editedItem.price} onChange={handleChange} className="border p-2" />
          <input type="number" name="stock" value={editedItem.stock} onChange={handleChange} className="border p-2" />
          <button onClick={handleSave} className="bg-green-500 text-white p-2">Save</button>
        </>
      ) : (
        <>
          <span>{item.title}</span>
          <span>{item.price}</span>
          <span>{item.stock}</span>
          <button onClick={() => setIsEditing(true)} className="bg-yellow-500 text-white p-2">Edit</button>
          <button onClick={() => openModal(item)} className="bg-red-500 text-white p-2">Delete</button>
        </>
      )}
    </li>
  );
};

export default InventoryItem;