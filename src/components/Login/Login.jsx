import React, { useState, useEffect, useRef } from 'react';
import { FormWithConstraints, FieldFeedbacks, FieldFeedback } from 'react-form-with-constraints';
import { useHistory } from 'react-router-dom';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import FormInput from '../Forms/FormInput/FormInput';
import { useUserContext } from '../../state/contexts/userContext';
import { getUser } from '../../utils/userApi';
import { CREATE_USER } from '../../constants/ActionTypes';
import facebookIcon from '../../images/logos/facebook.svg';
import twitterIcon from '../../images/logos/twitter.svg';

import './Login.css';

const Login = () => {
  const form = useRef(null);
  const history = useHistory();

  const [, updateUser] = useUserContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidForm, setVaidForm] = useState(false);
  const [dbUser, setDbUser] = useState({ email: '', password: '' });

  const fieldToSetStateMap = {
    email: setEmail,
    password: setPassword,
  };

  useEffect(() => {
    async function getDbUser() {
      const response = await getUser();
      setDbUser(response);
    }

    getDbUser();
  }, []);

  const handleLogin = async ($event) => {
    $event.preventDefault();

    await form.current.validateForm();

    if (form.current.isValid()) {
      updateUser({ type: CREATE_USER, response: dbUser });
      history.push('/catalog');
    }
  };

  const handleInputChange = async ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    const setStateCallback = fieldToSetStateMap[name];
    setStateCallback(value);

    await form.current.validateFields(target);

    if (form.current.isValid()) {
      setVaidForm(true);
    }
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

      <FormWithConstraints onSubmit={handleLogin} ref={form} className="sign-up">
        <FormInput
          id="email"
          name="email"
          label="Email Address"
          value={email}
          onChange={handleInputChange}
        />
        <FieldFeedbacks for="email">
          <FieldFeedback when="valueMissing">You must provide email address.</FieldFeedback>
          <FieldFeedback when={(value) => !/\S+@\S+/.test(value)}>
            Invalid email address.
          </FieldFeedback>
          <FieldFeedback when={() => email !== dbUser.email && password !== dbUser.password}>
            Wrong Username or Password
          </FieldFeedback>
        </FieldFeedbacks>

        <FormInput
          id="login-password"
          name="password"
          label="Password"
          type="password"
          required
          value={password}
          onChange={handleInputChange}
        />
        <FieldFeedbacks for="password">
          <FieldFeedback when="valueMissing" />
          <FieldFeedback when={() => email !== dbUser.email && password !== dbUser.password}>
            Wrong Username or Password
          </FieldFeedback>
        </FieldFeedbacks>
        <PrimaryButton onClick={handleLogin} isDisabled={!isValidForm}>
          <span>LOG IN</span>
        </PrimaryButton>
      </FormWithConstraints>
    </div>
  );
};

export default Login;
