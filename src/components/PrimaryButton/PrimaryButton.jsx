import React from 'react';
import PropTypes from 'prop-types';
import './primary-button.css';

const PrimaryButton = ({ children, onClick, btnStyle, isDisabled }) => (
  <button
    className={btnStyle === 'primary' ? 'primary' : btnStyle}
    type="button"
    onClick={onClick}
    disabled={isDisabled}
  >
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
  btnStyle: PropTypes.string,
  isDisabled: PropTypes.bool,
};

PrimaryButton.defaultProps = {
  children: '',
  onClick: () => null,
  btnStyle: 'primary',
  isDisabled: false,
};

export default PrimaryButton;
