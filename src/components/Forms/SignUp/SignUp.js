import React from "react";
import FormInput from "../FormInput/FormInput";
import {PrimaryButton} from "../../PrimaryButton/PrimaryButton";
import Tabs from "../../Tabs/Tabs";
import "./sign-up.css";

const tabs = [
  {
    id: "step-1-form",
    text: "Step 1"
  },
  {
    id: "step-2-form",
    text: "Step 2"
  },
];

export const SignUp = () => <div className="sign-up">
  <h2>Sign up</h2>
  <div className="tabs-container">
    <Tabs tabs={tabs} />
  </div>
  <form onSubmit={(e) => e.preventDefault()} className="sign-up">
    <FormInput id="sign-up-email-address" label="Email Address" placeholder="Your Email Address" />
    <FormInput id="sign-up-password" label="Password" />
    <FormInput id="sign-up-confirm-password" label="Confirm Password" />
    <p>By clicking the Sign Up button below, you agree to our Terms of Service and Privacy Policy.</p>
    <PrimaryButton>Sign Up</PrimaryButton>
  </form>
</div>;
