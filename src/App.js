import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import { Navbar } from './components/_index';
import { ProductListing, ProductPage, CartPage } from './pages/_index';

function App() {
  return (
    <div className="main__body">
      <Navbar />

      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
