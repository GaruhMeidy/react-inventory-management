import React, { useState } from 'react';
import Header from './components/Header';
import InventoryList from './components/InventoryList';
import Modal from './components/Modal';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [inventory, setInventory] = useState([]);
  const [modal, setModal] = useState({ isOpen: false, item: null });

  const addItem = (item) => {
    setInventory([...inventory, item]);
  };

  const updateItem = (updatedItem) => {
    setInventory(inventory.map(item => item.id === updatedItem.id ? updatedItem : item));
  };

  const deleteItem = (id) => {
    setInventory(inventory.filter(item => item.id !== id));
  };

  const openModal = (item) => {
    setModal({ isOpen: true, item });
  };

  const closeModal = () => {
    setModal({ isOpen: false, item: null });
  };

  return (
    <div className="App">
      <Header />
      <InventoryList 
        inventory={inventory} 
        addItem={addItem} 
        updateItem={updateItem} 
        deleteItem={deleteItem} 
        openModal={openModal} 
      />
      {modal.isOpen && <Modal item={modal.item} closeModal={closeModal} deleteItem={deleteItem} />}
      <Footer />
    </div>
  );
};

export default App;