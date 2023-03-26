import React from 'react';
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav>
      <div className="nav__logo__container">
        <h2>AUN</h2>
      </div>
      <div className="nav__search">
        <div className="search__input__container">
          <input type="text" name="" id="" />
          <button className="search__btn">
            <span className="fa-solid fa-magnifying-glass"></span>
          </button>
        </div>
      </div>
      <ul className="nav__menu__list">
        <li className="menu__items">Cart</li>
        <li className="menu__items"></li>
        <li className="menu__items"></li>
      </ul>
    </nav>
  );
};
