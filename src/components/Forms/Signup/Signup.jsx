import React from 'react';
import Step1 from './Step1/Step1';
import Tabs from '../../Tabs/Tabs';

const SignUp = () => {
  return (
    <div className="step1">
      <h2>Sign up</h2>
      <Tabs />
      <Step1 />
    </div>
  );
};

export default SignUp;
