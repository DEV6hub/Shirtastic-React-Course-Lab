import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { FormWithConstraints, FieldFeedbacks, FieldFeedback } from 'react-form-with-constraints';
import FormInput from '../../Forms/FormInput/FormInput';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';
import './step1.css';

const Step1 = ({ onComplete }) => {
  const signupForm = useRef(null);

  const [signupEmail, setEmail] = useState('');
  const [signupPassword, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [isValidForm, setVaidForm] = useState(false);

  const userInfo = { email: signupEmail, password: signupPassword, passwordConfirm };

  const fieldToSetStateMap = {
    signupEmail: setEmail,
    signupPassword: setPassword,
    passwordConfirm: setPasswordConfirm,
  };

  async function signupSubmit(e) {
    e.preventDefault();

    await signupForm.current.validateForm();

    if (signupForm.current.isValid()) {
      onComplete({ userInfo });
    }
  }

  async function handleInputChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    const setStateCallback = fieldToSetStateMap[name];
    setStateCallback(value);

    await signupForm.current.validateForm();
    await signupForm.current.validateFields(target);

    if (signupForm.current.isValid()) {
      setVaidForm(true);
    } else {
      setVaidForm(false);
    }
  }

  return (
    <FormWithConstraints onSubmit={signupSubmit} ref={signupForm} className="sign-up">
      <FormInput
        id="signupEmail"
        label="Email Address"
        name="signupEmail"
        value={signupEmail}
        placeholder="Your Email Address"
        onChange={handleInputChange}
      />
      <FieldFeedbacks for="signupEmail">
        <FieldFeedback when="valueMissing">You must provide email address.</FieldFeedback>
        <FieldFeedback when={(value) => !/\S+@\S+/.test(value)}>
          Invalid email address.
        </FieldFeedback>
      </FieldFeedbacks>

      <FormInput
        id="signupPassword"
        label="Password"
        name="signupPassword"
        type="password"
        required
        value={signupPassword}
        onChange={handleInputChange}
        pattern=".{5,}"
      />
      <FieldFeedbacks for="signupPassword">
        <FieldFeedback when="valueMissing" />
        <FieldFeedback when="patternMismatch">Should be at least 5 characters long</FieldFeedback>
        <FieldFeedback when={(value) => !/\d/.test(value)} warning>
          Should contain numbers
        </FieldFeedback>
        <FieldFeedback when={(value) => !/[a-z]/.test(value)} warning>
          Should contain small letters
        </FieldFeedback>
        <FieldFeedback when={(value) => !/[A-Z]/.test(value)} warning>
          Should contain capital letters
        </FieldFeedback>
        <FieldFeedback when={(value) => !/\W/.test(value)} warning>
          Should contain special characters
        </FieldFeedback>
      </FieldFeedbacks>

      <FormInput
        id="passwordConfirm"
        type="password"
        label="Confirm Password"
        name="passwordConfirm"
        required
        value={passwordConfirm}
        onChange={handleInputChange}
      />

      <FieldFeedbacks for="passwordConfirm">
        <FieldFeedback when={(value) => value !== signupPassword}>
          Not the same password
        </FieldFeedback>
      </FieldFeedbacks>

      <p>
        By clicking the Sign Up button below, you agree to our Terms of Service and Privacy Policy.
      </p>
      <PrimaryButton type="submit" isDisabled={!isValidForm}>
        Sign Up
      </PrimaryButton>
    </FormWithConstraints>
  );
};

Step1.propTypes = {
  onComplete: PropTypes.func.isRequired,
};

export default Step1;
