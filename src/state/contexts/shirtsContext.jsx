import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { shirtsReducer } from '../reducers';

const ShirtsContext = createContext();

export const ShirtsProvider = ({ children }) => {
  const initialState = {
    isFetchingShirts: false,
    shirtList: [],
  };

  return (
    <ShirtsContext.Provider value={useReducer(shirtsReducer, initialState)}>
      {children}
    </ShirtsContext.Provider>
  );
};

ShirtsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useShirtsContext = () => useContext(ShirtsContext);
