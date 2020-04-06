import React from "react";
import {Link} from "react-router-dom";
import {PrimaryButton} from "../../PrimaryButton/PrimaryButton";
import FormInput from "../FormInput/FormInput";
import "./login.css";



const facebookLogo = require("../../../images/logos/facebook.svg");
const twitterLogo = require("../../../images/logos/twitter.svg");

export const Login = ({onLoginFn}) => <form onSubmit={(e) => e.preventDefault()} className="login">
  <h2>Log in</h2>
  <PrimaryButton>
    <img src={facebookLogo} alt={'Login with Facebook'} />
    <span>with Facebook</span>
  </PrimaryButton>
  <PrimaryButton>
    <img src={twitterLogo} alt={'Login with Twitter'} />
    <span>with Twitter</span>
  </PrimaryButton>
  <div>OR</div>
  <FormInput id="login-email-address" label="Email Address" />
  <FormInput id="login-password" label="Password" />
  <Link to="/catalog">
    <PrimaryButton>
      Log in
    </PrimaryButton>
  </Link>
</form>;
