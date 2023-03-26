import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { VerticalCard } from '../../components/_index';
import './ProductListing.css';

export const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const card = { title: 'temp', category: 'temp', img: 'img', price: 'price' };
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts([...response.data]);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);
  return (
    <div className="product__grid">
      {products.map((card) => (
        <VerticalCard card={card} />
      ))}
    </div>
  );
};
