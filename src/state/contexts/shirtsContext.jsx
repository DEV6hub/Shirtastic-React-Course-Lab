import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import useShirts from '../../hooks/useShirts';

const ShirtsContext = createContext();

export const ShirtsProvider = ({ children }) => {
  return <ShirtsContext.Provider value={useShirts()}>{children}</ShirtsContext.Provider>;
};

ShirtsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useShirtsContext = () => useContext(ShirtsContext);
