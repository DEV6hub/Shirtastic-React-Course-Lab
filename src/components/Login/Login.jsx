import React from 'react';
import './Login.css';
import { useHistory, Link } from 'react-router-dom';

import PrimaryButton from '../PrimaryButton/primary-button';
import FormInput from '../Forms/FormInput/FormInput';
import facebookIcon from '../../images/facebook.svg';
import twitterIcon from '../../images/twitter.svg';

const Login = () => {
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    history.push('/catalog');
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

      <form className="login" onSubmit={handleLogin}>
        <FormInput id="login-email-address" label="Email Address" />
        <FormInput id="login-password" label="Password" />
        {/* TODO AK Wrong HTML */}
        <Link to="/catalog">
          <PrimaryButton>
            <span>LOG IN</span>
          </PrimaryButton>
        </Link>
      </form>
    </div>
  );
};

export default Login;
