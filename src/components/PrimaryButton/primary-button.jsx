import React from 'react';
import PropTypes from 'prop-types';
import './primary-button.css';

const PrimaryButton = ({ children }) => (
  <button className="primary" type="button">
    {children}
  </button>
);

PrimaryButton.propTypes = {
  children: PropTypes.string,
};

PrimaryButton.defaultProps = {
  children: '',
};

export default PrimaryButton;
