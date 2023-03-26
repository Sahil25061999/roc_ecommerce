import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Rating } from '../../components/_index';
import axios from 'axios';
import './ProductPage.css';

export const ProductPage = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  console.log(id);
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
          <h1 className="product__price">{product.price}</h1>
        </div>
        <div className="product__description ">
          <p>{product.description}</p>
        </div>

        <div className="product__btn__container "></div>
      </div>
    </section>
  );
};
