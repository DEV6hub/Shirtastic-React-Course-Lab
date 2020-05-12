import React from 'react';
import PropTypes from 'prop-types';
import './form-group.css';

const FormGroup = ({ children }) => <div className="form-group">{children}</div>;

FormGroup.propTypes = {
  children: PropTypes.element,
};

FormGroup.defaultProps = {
  children: '',
};

export default FormGroup;