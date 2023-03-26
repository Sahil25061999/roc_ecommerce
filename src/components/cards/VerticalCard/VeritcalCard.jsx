import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../../context/cartContext';
import './VerticalCard.css';

export const VerticalCard = ({ card, quantity = false }) => {
  const { dispatchCart } = useCart();
  return (
    <div className="card__vertical">
      <div className="card__img__container">
        <img src={card.image} alt="" className="card__img" />
      </div>
      <div className="card__head__container">
        <h2 className="card__heading">
          <Link to={`/product/${card.id}`}>{card.title}</Link>
        </h2>
        <p className="card__category">{card.category}</p>
      </div>
      <div className="card__price">${card.price}</div>
      {quantity ? (
        <div className="remove__btn__container">
          <button
            onClick={() => dispatchCart({ type: 'REMOVE', payload: card })}
          >
            Remove
          </button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
