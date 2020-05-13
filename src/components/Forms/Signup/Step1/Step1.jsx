import React from 'react';
import FormInput from '../../FormInput/FormInput';
import PrimaryButton from '../../../PrimaryButton/primary-button';
import './step1.css';

const Step1 = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="sign-up">
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
      <PrimaryButton>Sign Up</PrimaryButton>
    </form>
  );
};

export default Step1;
