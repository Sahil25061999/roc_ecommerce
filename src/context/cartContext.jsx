import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext(null);

const reducFunc = (state, action) => {
  switch (action.type) {
    case 'ADD':
      let tempstate = state.filter((item) => item.id === action.payload.id);
      if (tempstate.length > 0) {
        return state;
      }
      return [...state, { ...action.payload }];
    case 'Update':
      return [
        ...state.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      ];
    case 'REMOVE':
      return [...state.filter((item) => item.id !== action.payload.id)];
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatchCart] = useReducer(reducFunc, []);
  console.log(cart);
  return (
    <CartContext.Provider value={{ cart, dispatchCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
