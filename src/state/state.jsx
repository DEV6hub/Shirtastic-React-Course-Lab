import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import rootReducer from './reducers';

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const initialState = {
    shirts: {
      fetchingShirts: false,
      shirtList: [],
    },
    user: { user: {} },
  };
  // console.log('rootReducer + iS', typeof rootReducer, typeof initialState);
  // const value = useReducer(rootReducer, initialState);
  // console.log('StateProvider -> useReducer', useReducer);
  return (
    <StateContext.Provider value={useReducer(rootReducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

StateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useStateValue = () => useContext(StateContext);