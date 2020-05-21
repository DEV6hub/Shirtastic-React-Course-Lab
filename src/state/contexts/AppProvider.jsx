import React from 'react';
import PropTypes from 'prop-types';

import { ShirtsProvider } from './shirtsContext';
import { UserProvider } from './userContext';
import { OverlayProvider } from './overlayContext';
import { ShoppingCartProvider } from './shoppingCartContext';

const AppProvider = ({ children }) => {
  return (
    <UserProvider>
      <OverlayProvider>
        <ShirtsProvider>
          <ShoppingCartProvider>{children}</ShoppingCartProvider>
        </ShirtsProvider>
      </OverlayProvider>
    </UserProvider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
