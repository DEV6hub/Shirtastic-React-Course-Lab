import React from 'react';
import PropTypes from 'prop-types';

import { ShirtsProvider } from './shirts';
import { UserProvider } from './user';

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
