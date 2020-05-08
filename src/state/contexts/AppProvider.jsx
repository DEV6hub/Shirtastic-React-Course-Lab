import React from 'react';
import PropTypes from 'prop-types';

import { ShirtsProvider } from './shirtsContext';
import { UserProvider } from './userContext';
import { ShoppingCartProvider } from './shoppingCartContext';

const AppProvider = ({ children }) => {
  return (
    <UserProvider>
      <ShirtsProvider>
        <ShoppingCartProvider>{children}</ShoppingCartProvider>
      </ShirtsProvider>
    </UserProvider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
