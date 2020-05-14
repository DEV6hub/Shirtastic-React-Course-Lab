import React from 'react';
import PropTypes from 'prop-types';
import './primary-button.css';

const PrimaryButton = ({ children, onClick }) => (
  <button className="primary" type="button" onClick={onClick}>
    {children}
  </button>
);

PrimaryButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  onClick: PropTypes.func,
};

PrimaryButton.defaultProps = {
  children: '',
  onClick: () => null,
};

export default PrimaryButton;
