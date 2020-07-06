import React from 'react';
import facebookIcon from '../../images/logos/facebook.svg';
import twitterIcon from '../../images/logos/twitter.svg';

import './Login.css';

const Login = () => {
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

      <form onSubmit className="sign-up"></form>
    </div>
  );
};

export default Login;
