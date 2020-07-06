import React, { useState } from 'react';
import facebookIcon from '../../images/logos/facebook.svg';
import twitterIcon from '../../images/logos/twitter.svg';
import FormInput from '../Forms/FormInput/FormInput';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Handle log-in');
  };

  return (
    <div className="login-container">
      <h2>Log in</h2>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://facebook.com"
        className="button button-primary"
      >
        <img src={facebookIcon} alt="Login with Facebook" />
        <span>with Facebook</span>
      </a>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com"
        className="button button-primary"
      >
        <img src={twitterIcon} alt="Login with Twitter" />
        <span>with Twitter</span>
      </a>

      <div className="or-divider">
        <div className="line">&nbsp;</div>
        <div>OR</div>
        <div className="line">&nbsp;</div>
      </div>

      <form onSubmit={handleLogin} className="sign-up">
        <FormInput
          id="email"
          name="email"
          label="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          id="login-password"
          name="password"
          label="Password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></FormInput>
        <PrimaryButton onClick={handleLogin}>
          <span>LOG IN</span>
        </PrimaryButton>
      </form>
    </div>
  );
};

export default Login;
