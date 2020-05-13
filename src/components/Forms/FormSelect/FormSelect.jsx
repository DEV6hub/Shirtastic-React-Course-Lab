import React from 'react';
import PropTypes from 'prop-types';
import FormGroup from '../FormGroup/FormGroup';
import './form-select.css';

const FormSelect = ({ id, label, options, children, value, onChange }) => (
  <FormGroup>
    <label htmlFor={id}>{label}</label>
    <select onChange={onChange} value={value}>
      {options.map((option) => (
        <FormSelectOption key={option.value} label={option.text} value={option.value} />
      ))}
    </select>
    {children}
  </FormGroup>
);

FormSelect.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      text: PropTypes.text,
    }),
  ).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  value: PropTypes.string,
  onChange: PropTypes.func,
};

FormSelect.defaultProps = {
  label: '',
  children: '',
  value: '',
  onChange: () => null,
};

const FormSelectOption = ({ label, value }) => <option value={value}>{label}</option>;

FormSelectOption.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
};

FormSelectOption.defaultProps = {
  label: '',
  value: '',
};

export default FormSelect;
