import React, { useState, useCallback } from 'react';
import './Home.css';

import Login from '../../components/Login/Login';
import SignUp from '../../components/SignupFlow/SignupFlow';
import signupTabs from '../../constants/SignUpTabs';
import logoVertical from '../../images/Shirtastic-vertical.svg';

const Home = () => {
  const [activeTab] = useState('1');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const info = { activeTab, email, password };

  const signUpData = useCallback(
    ({ newEmail, newPassword }) => {
      setEmail(newEmail);
      setPassword(newPassword);
    },
    [setEmail, setPassword],
  );

  const [step, setStep] = useState(signupTabs[0].id);

  return (
    <div className="home">
      {step === signupTabs[0].id && (
        <div className="left-column">
          <Login userSignUpData={info} />
        </div>
      )}
      <div className="middle-column">
        <div>&nbsp;</div>
        <img className="vertical-logo" src={logoVertical} alt="vertical logo" />
        <div className="copyright text-center">© 2020 Aquent DEV6.</div>
      </div>
      <div className={`left-column ${step === signupTabs[0].id ? 'shipping-col' : ''}`}>
        <SignUp signupTabs={signupTabs} activeTab={step} updateTab={setStep} />
      </div>
    </div>
  );
};

export default Home;
