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
      <div className="text-center">
        <h2>Log in</h2>

        <PrimaryButton>
          <img src={facebookIcon} alt="Login with Facebook" />
          <span>with Facebook</span>
        </PrimaryButton>

        <PrimaryButton>
          <img src={twitterIcon} alt="Login with Twitter" />
          <span>with Twitter</span>
        </PrimaryButton>
      </div>

      <div className="or-divider">
        <div className="line">&nbsp;</div>
        <div>OR</div>
        <div className="line">&nbsp;</div>
      </div>

      {
        // TODO KRA Fine tune styling
      }
      <form onSubmit={handleLogin}>
        <FormInput id="login-email-address" label="Email Address" />
        <FormInput id="login-password" label="Password" />

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
