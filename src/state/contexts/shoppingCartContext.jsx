import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import useShoppingCart from '../../hooks/useShoppingCart';

const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  return (
    <ShoppingCartContext.Provider value={useShoppingCart()}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

ShoppingCartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useShoppingCartContext = () => useContext(ShoppingCartContext);
