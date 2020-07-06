import React from 'react';
import PropTypes from 'prop-types';

// import { ShirtsProvider } from './shirtsContext';
import { UserProvider } from './userContext';
import { OverlayProvider } from './overlayContext';
import { ShoppingCartProvider } from './shoppingCartContext';
import { DesignProvider } from './designContext';

const AppProvider = ({ children }) => {
  return (
    <UserProvider>
      <OverlayProvider>
        <DesignProvider>
          <ShoppingCartProvider>{children}</ShoppingCartProvider>
        </DesignProvider>
      </OverlayProvider>
    </UserProvider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
