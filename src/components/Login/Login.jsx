import React from 'react';
import './Login.css';
import { useHistory } from 'react-router-dom';
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
        <br />
        <button type="button" className="primary-btn" onClick={handleLogin}>
          <img className="facebook-icon" src={facebookIcon} alt="facebook icon" />
          WITH FACEBOOK
        </button>
        <button type="button" className="primary-btn" onClick={handleLogin}>
          <img className="twitter-icon" src={twitterIcon} alt="twitter icon" />
          WITH TWITTER
        </button>
      </div>
      <br />
      <div className="hr">
        <span>OR</span>
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
        <div className="text-center">
          <button type="submit" className="primary-btn">
            LOG IN
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
