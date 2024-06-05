import React from 'react';
import logo from '../logo.png';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-5 flex items-center justify-between">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-20" />
        <span className="ml-4 text-xl">Muhamad Garuh Meidy Putra</span>
      </div>
      <h1 className="text-3xl">Inventory Barang</h1>
    </header>
  );
};

export default Header;