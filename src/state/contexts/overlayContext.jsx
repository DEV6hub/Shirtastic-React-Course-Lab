import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import useOverlay from '../../hooks/useOverlay';

const OverlayContext = createContext();

export const OverlayProvider = ({ children }) => {
  return <OverlayContext.Provider value={useOverlay()}>{children}</OverlayContext.Provider>;
};

OverlayProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useOverlayContext = () => useContext(OverlayContext);
