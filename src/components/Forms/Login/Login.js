import React from "react";
import {PrimaryButton} from "../../PrimaryButton/PrimaryButton";
import FormInput from "../FormInput/FormInput";


const facebookLogo = require("../../../images/logos/facebook.svg");
const twitterLogo = require("../../../images/logos/twitter.svg");

export const Login = ({onLoginFn}) => <form onSubmit={(e) => e.preventDefault()}>
  <h2>Log in</h2>
  <PrimaryButton>
    <img src={facebookLogo} alt={'Login with Facebook'} />
    with Facebook
  </PrimaryButton>
  <PrimaryButton>
    <img src={twitterLogo} alt={'Login with Twitter'} />
    with Twitter
  </PrimaryButton>
  <div>OR</div>
  <FormInput id="login-email-address" label="Email Address" />
  <FormInput id="login-password" label="Password" />
  <PrimaryButton>
    Log in
  </PrimaryButton>
</form>;
