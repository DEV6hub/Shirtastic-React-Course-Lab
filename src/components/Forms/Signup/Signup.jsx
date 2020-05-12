import React from 'react';
import PropTypes from 'prop-types';
import Step1 from './Step1/Step1';
import Tabs from '../../Tabs/Tabs';

const SignUp = ({ signupTabs }) => {
  return (
    <div className="step1">
      <h2>Sign up</h2>
      {/* <Tabs activeClassName="active" /> */}
      <Step1 />
    </div>
  );
};

SignUp.propTypes = {
  signupTabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
    }),
  ),
};

SignUp.defaultProps = {
  signupTabs: [],
};

export default SignUp;
