import React, { useState, useEffect, useRef } from 'react';
import './Rating.css';

export const Rating = ({ rating }) => {
  const getStyle = (idx) => {
    if (idx < Math.floor(rating)) {
      return { background: 'black' };
    }
    if (idx === Math.floor(rating)) {
      if (rating > Math.floor(rating)) {
        return {
          background:
            'linear-gradient(to left,rgb(187, 187, 187)50%,black 50%)',
        };
      }
    }
  };

  return (
    <div className="ratings__container ">
      {new Array(5).fill(0).map((item, idx) => (
        <div className="rating__container" key={idx}>
          <div className="rating__bg" style={getStyle(idx)}>
            <span className="fa-solid fa-star"></span>
          </div>
        </div>
      ))}
    </div>
  );
};
