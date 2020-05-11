import React from 'react';
import FormInput from '../FormInput/FormInput';
import PrimaryButton from '../../PrimaryButton/primary-button';
// import Tabs from '../../Tabs/Tabs';
import './sign-up.css';
// import SignUpStep2 from '../SignUpStep2/SignUpStep2';
// import { SignUpTabs } from '../../../constants/signupTabs';

const SignUp = () => {
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

export default SignUp;
