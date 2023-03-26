import React, { useState } from 'react';
import { useSearch } from '../../context/searchContext';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  const [search, setSearch] = useState('');
  const { setSearchQuery } = useSearch();
  return (
    <nav>
      <div className="nav__logo__container">
        <h2>
          <NavLink to="/">AUN</NavLink>
        </h2>
      </div>
      <div className="nav__search">
        <div className="search__input__container">
          <input
            type="text"
            name=""
            id=""
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button
            className="search__btn"
            onClick={() => setSearchQuery(search)}
          >
            <span className="fa-solid fa-magnifying-glass"></span>
          </button>
        </div>
      </div>
      <ul className="nav__menu__list">
        <li className="menu__items">
          <NavLink to="/cart">Cart</NavLink>
        </li>
      </ul>
    </nav>
  );
};
