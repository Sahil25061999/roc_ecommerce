import React, { useEffect, useState } from 'react';
import { useCart } from '../../context/cartContext';
import { VerticalCard } from '../../components/_index';
import '../productListing/ProductListing.css';

export const CartPage = () => {
  const { cart } = useCart();

  useEffect(() => {}, []);
  return (
    <div className="product__grid">
      {cart.map((card) => (
        <VerticalCard card={card} quantity={true} />
      ))}
    </div>
  );
};
