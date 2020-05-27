import React from 'react';
import PropTypes from 'prop-types';

import './checkout-tab.css';

const CheckoutTab = ({ children, isDisabled, isWide }) => {
  return (
    <div className={`checkout-tab${isDisabled ? ' tab-disabled' : ''}${isWide ? ' wide-tab' : ''}`}>
      {children}
    </div>
  );
};

CheckoutTab.propTypes = {
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool,
  isWide: PropTypes.bool,
};

CheckoutTab.defaultProps = {
  isDisabled: false,
  isWide: false,
};

export default CheckoutTab;
