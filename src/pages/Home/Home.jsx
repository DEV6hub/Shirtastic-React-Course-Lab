import React, { useState } from 'react';
import Login from '../../components/Login/Login';
import SignUp from '../../components/SignupFlow/SignupFlow';
import signupTabs from '../../constants/SignUpTabs';
import logoVertical from '../../images/Shirtastic-vertical.svg';
import './Home.css';

const Home = () => {
  const [step, setStep] = useState(signupTabs[0].id);

  return (
    <div className="home">
      {step === signupTabs[0].id && (
        <div className="left-column">
          <Login />
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
