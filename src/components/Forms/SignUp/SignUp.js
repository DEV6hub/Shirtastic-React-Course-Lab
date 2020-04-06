import React from "react";
import FormInput from "../FormInput/FormInput";
import {PrimaryButton} from "../../PrimaryButton/PrimaryButton";

export const SignUp = () => <div className="sign-up">
  <h2>Sign up</h2>
  <div>
    Tab Component Here for step 2
  </div>
  <form onSubmit={(e) => e.preventDefault()}>
    <FormInput id="sign-up-email-address" label="Email Address" />
    <FormInput id="sign-up-password" label="Password" />
    <FormInput id="sign-up-confirm-password" label="Confirm Password" />
    <p>By clicking the Sign Up button below, you agree to our Terms of Service and Privacy Policy.</p>
    <PrimaryButton>Sign Up</PrimaryButton>
  </form>
</div>;
