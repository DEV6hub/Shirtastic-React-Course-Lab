import React from "react";
import PropTypes from "prop-types";
import FormGroup from "../FormGroup/FormGroup";

const FormSelect = ({id, label, options, children, value, onChangeFn}) => <FormGroup>
  <label htmlFor={id}>{label}</label>
  <select onChange={onChangeFn} value={value}>
    {
      options.map(option => <FormSelectOption key={option.value} label={option.text} value={option.value} />)
    }
  </select>
  {children}
</FormGroup>;

const FormSelectOption = ({label, value}) => <option value={value}>
  {label}
</option>;

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
};

export default FormSelect;
