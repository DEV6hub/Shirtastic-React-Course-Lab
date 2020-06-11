import React from 'react';
import PropTypes from 'prop-types';
import './primary-button.css';

const PrimaryButton = ({ type, children, onClick, btnStyle, isDisabled }) => (
  // eslint-disable-next-line react/button-has-type
  <button
    className={btnStyle === 'primary' ? 'primary' : btnStyle}
    type={type || 'button'}
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
  type: PropTypes.string,
  onClick: PropTypes.func,
  btnStyle: PropTypes.string,
  isDisabled: PropTypes.bool,
};

PrimaryButton.defaultProps = {
  children: '',
  onClick: () => null,
  btnStyle: 'primary',
  isDisabled: false,
  type: 'button',
};

export default PrimaryButton;
