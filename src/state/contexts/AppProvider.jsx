import React from 'react';
import PropTypes from 'prop-types';

import { ShirtsProvider } from './shirtsContext';
import { UserProvider } from './userContext';

const AppProvider = ({ children }) => {
  return (
    <UserProvider>
      <ShirtsProvider>{children}</ShirtsProvider>
    </UserProvider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
