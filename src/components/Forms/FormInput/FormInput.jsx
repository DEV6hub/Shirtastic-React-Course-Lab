import React from 'react';
import PropTypes from 'prop-types';
import FormGroup from '../FormGroup/FormGroup';
import './form-input.css';

const FormInput = ({ id, label, placeholder, children, inputValue, onChangeFn }) => (
  <FormGroup>
    <label htmlFor={id}>{label}</label>
    <input type="text" id={id} placeholder={placeholder} onChange={onChangeFn} value={inputValue} />
    {children}
  </FormGroup>
);

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  inputValue: PropTypes.string,
  onChangeFn: PropTypes.func,
};

FormInput.defaultProps = {
  label: '',
  placeholder: '',
  children: '',
  inputValue: '',
  onChangeFn: () => {
    return null;
  },
};

export default FormInput;
