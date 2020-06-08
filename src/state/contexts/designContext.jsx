import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import useDesign from '../../hooks/useDesign';

const DesignContext = createContext();

export const DesignProvider = ({ children }) => {
  return <DesignContext.Provider value={useDesign()}>{children}</DesignContext.Provider>;
};

DesignProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useDesignContext = () => useContext(DesignContext);
