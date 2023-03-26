import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Rating } from '../../components/_index';
import { useCart } from '../../context/cartContext';
import axios from 'axios';
import './ProductPage.css';

export const ProductPage = () => {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [cartBtn, setBtnCart] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const { cart, dispatchCart } = useCart();

  //   const addToCart = async () => {
  //     const response = await axios.post('https://fakestoreapi.com/carts', {
  //       userId: 1,
  //       date: 2023 - 12 - 26,
  //       products: [{ productId: id, quantity: quantity }],
  //     });
  //     console.log(response);
  //   };

  const addToCart = () => {
    dispatchCart({ type: 'ADD', payload: { ...product, quantity: quantity } });
    setBtnCart(!cartBtn);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );

        setProduct({ ...response.data });
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);
  return (
    <section className="product__page">
      <div className="product__page__image">
        <img src={product.image} alt="" />
      </div>
      <div className="product__information">
        <div className="product__head">
          <div className="product__title">
            <h2>{product.title}</h2>{' '}
          </div>
          <p className="product__seller">{product.category}</p>
          <Rating rating={product.rating} />
        </div>
        <div className="product__price__container ">
          <h1 className="product__price">${product.price}</h1>
        </div>
        <div className="product__description ">
          <p>{product.description}</p>
        </div>

        <div className="product__btn__container ">
          <div className="quantity__btn__container">
            <button
              className="remove"
              onClick={() => {
                return quantity !== 1 ? setQuantity((prev) => (prev -= 1)) : '';
              }}
            >
              -
            </button>
            <div className="quantity">{quantity}</div>
            <button
              className="add"
              onClick={() => setQuantity((prev) => (prev += 1))}
            >
              +
            </button>
          </div>
          <button
            className="cart__btn"
            onClick={() => (cartBtn ? addToCart() : navigate('/cart'))}
          >
            {cartBtn ? 'Add to cart' : 'Go to cart'}
          </button>
        </div>
      </div>
    </section>
  );
};
