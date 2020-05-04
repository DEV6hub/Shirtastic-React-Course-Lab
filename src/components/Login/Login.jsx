import React from 'react';
import './Login.css';
import { useHistory } from 'react-router-dom';
// import { useStateValue } from '../../state/state';
import {
  requestShirts,
  requestShirtsSuccess,
  requestShirtsFailure,
  createdUser,
} from '../../state/actions';
import facebookIcon from '../../images/facebook.svg';
import twitterIcon from '../../images/twitter.svg';

const Login = () => {
  const history = useHistory();
  // const [
  //   {
  //     shirts: { shirtList, fetchingShirts },
  //   },
  //   dispatch,
  // ] = useStateValue();
  // console.log('Login -> shirtList, fetchingShirts ', shirtList, fetchingShirts);

  function handleLogin(e) {
    e.preventDefault();
    history.push('/catalog');
  }

  // function fetchShirts() {
  //   dispatch(requestShirts());
  //   return fetch('http://localhost:9001/shirts')
  //     .then((response) => response.json())
  //     .then(
  //       (json) => dispatch(requestShirtsSuccess(json)),
  //       (error) => dispatch(requestShirtsFailure(error)),
  //     );
  // }

  // function createUser() {
  //   const user = {
  //     name: 'Gagan',
  //     address1: '38 kittiwake avenue',
  //     address2: 'ddd',
  //     phone: '4162724949',
  //     city: 'etobicoke',
  //     country: 'canada',
  //     province: 'British Columbia',
  //     zip: 'm9v4p6',
  //     email: 'gagan@gmail.com',
  //     password: 'abcdef1Q@',
  //   };
  //   axios({
  //     method: 'post',
  //     url: 'http://localhost:9000/userInfo',
  //     data: user,
  //   })
  //     .then((response) => {
  //       console.log(response);
  //       dispatch(createdUser(response.data));
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  return (
    <div className="login-container">
      <div className="text-center">
        <h2>Log in</h2>
        <br />
        {/* <button type="button" className="primary-btn" onClick={fetchShirts <- ??}> */}
        <button type="button" className="primary-btn" onClick={handleLogin}>
          <img className="facebook-icon" src={facebookIcon} alt="facebook icon" />
          WITH FACEBOOK
        </button>
        {/* <button type="button" className="primary-btn" onClick={createUser <- ??}> */}
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
      {/* <h1>{fetchingShirts ? 'YES' : 'NO'}</h1>
      {shirtList.map((shirt) => (
        <p key={shirt.name}>{shirt.name}</p>
      ))} */}
    </div>
  );
};

export default Login;
