import React from 'react';
import PropTypes from 'prop-types';
import './primary-button.css';

const PrimaryButton = ({ children, onClick, btnStyle }) => (
  <button className={btnStyle === 'primary' ? 'primary' : btnStyle} type="button" onClick={onClick}>
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
};

PrimaryButton.defaultProps = {
  children: '',
  onClick: () => null,
  btnStyle: 'primary',
};

export default PrimaryButton;
