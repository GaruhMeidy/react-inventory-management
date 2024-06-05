import React from 'react';

const Modal = ({ item, closeModal, deleteItem }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-5 rounded shadow-lg">
        <h2 className="text-xl mb-4">Confirm Delete</h2>
        <p className="mb-4">Are you sure you want to delete {item.title}?</p>
        <div className="flex justify-end">
          <button onClick={closeModal} className="bg-gray-500 text-white p-2 mr-2 rounded">Cancel</button>
          <button onClick={() => {
            deleteItem(item.id);
            closeModal();
          }} className="bg-red-500 text-white p-2 rounded">Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;