import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import { Navbar } from './components/_index';
import { ProductListing, ProductPage } from './pages/_index';

function App() {
  return (
    <div className="main__body">
      <Navbar />

      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
