import React from "react";
import PropTypes from "prop-types";
import FormGroup from "../FormGroup/FormGroup";
import "./form-input.css";

const FormInput = ({id, label, placeholder, children}) => <FormGroup>
  <label htmlFor={id}>{label}</label>
  <input type="text" id={id} placeholder={placeholder} />
  {children}
</FormGroup>;

FormInput.propTypes = {
  id: PropTypes.string.isRequired
};

FormInput.defaultProps = {
  placeholder: ""
};

export default FormInput
