import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { VerticalCard } from '../../components/_index';
import { useSearch } from '../../context/searchContext';
import './ProductListing.css';

export const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const { searchQuery } = useSearch();
  const filteredList = products.filter((item) =>
    item.title.includes(searchQuery)
  );

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
      {filteredList.length
        ? filteredList.map((card) => <VerticalCard card={card} />)
        : `${searchQuery} does not exist`}
    </div>
  );
};
