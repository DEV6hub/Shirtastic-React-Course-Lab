import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { userReducer } from '../reducers';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const initialState = {};

  return (
    <UserContext.Provider value={useReducer(userReducer, initialState)}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useUserContext = () => useContext(UserContext);
