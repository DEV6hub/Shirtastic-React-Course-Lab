import React from 'react';
import './Login.css';
import { useHistory, Link } from 'react-router-dom';

import PrimaryButton from '../PrimaryButton/primary-button';
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

      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password</label>
          <input type="password" className="form-control" />
        </div>
        <br />

        <Link to="/catalog">
          <PrimaryButton>
            <span>LOG IN</span>
          </PrimaryButton>
        </Link>
        {/* <div className="text-center">
          <button type="submit" className="primary-btn">
            LOG IN
          </button>
        </div> */}
      </form>
    </div>
  );
};

export default Login;
