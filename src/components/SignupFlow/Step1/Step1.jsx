import React from 'react';
import PropTypes from 'prop-types';
import FormInput from '../../Forms/FormInput/FormInput';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';
import './step1.css';

const Step1 = ({ onComplete }) => {
  const handleSignup = ($event) => {
    $event.preventDefault();
    onComplete($event, 0);
  };

  return (
    <form onSubmit={handleSignup} className="sign-up">
      <FormInput
        id="sign-up-email-address"
        label="Email Address"
        placeholder="Your Email Address"
      />
      <FormInput id="sign-up-password" label="Password" />
      <FormInput id="sign-up-confirm-password" label="Confirm Password" />
      <p>
        By clicking the Sign Up button below, you agree to our Terms of Service and Privacy Policy.
      </p>
      <PrimaryButton onClick={handleSignup}>Sign Up</PrimaryButton>
    </form>
  );
};

Step1.propTypes = {
  onComplete: PropTypes.func.isRequired,
};

export default Step1;
