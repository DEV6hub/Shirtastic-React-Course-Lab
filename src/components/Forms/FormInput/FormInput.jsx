import React from 'react';
import PropTypes from 'prop-types';
import FormGroup from '../FormGroup/FormGroup';
import './form-input.css';

const FormInput = ({
  id,
  name,
  label,
  type,
  placeholder,
  children,
  value,
  onChange,
  required,
  pattern,
}) => (
  <FormGroup>
    <label htmlFor={id}>{label}</label>
    <input
      type={type || 'text'}
      id={id}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      required={required}
      pattern={pattern}
    />
    {children}
  </FormGroup>
);

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  value: PropTypes.string,
  onChange: PropTypes.func,
};

FormInput.defaultProps = {
  label: '',
  name: '',
  placeholder: '',
  children: '',
  value: '',
  onChange: ($event) => console.log('Not implemented', $event),
};

export default FormInput;
