import React from "react";
import FormInput from "../FormInput/FormInput";
import {PrimaryButton} from "../../PrimaryButton/PrimaryButton";
import Tabs from "../../Tabs/Tabs";
import "./sign-up.css";
import {SignUpStep2} from "../SignUpStep2/SignUpStep2";

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

// temporary state until we figure out the context
// change to see step 2
const activeTab = tabs[0].id;

export const SignUp = () => <div className={`sign-up-component ${activeTab === tabs[1].id ? 'step2' : ''}`}>
  { activeTab === tabs[0].id && <h2>Sign up</h2>}
  <div className="tabs-container">
    <Tabs tabs={tabs} active={activeTab} />
  </div>
  {
    activeTab === tabs[0].id &&
    <form onSubmit={(e) => e.preventDefault()} className="sign-up">
      <FormInput id="sign-up-email-address" label="Email Address" placeholder="Your Email Address"/>
      <FormInput id="sign-up-password" label="Password"/>
      <FormInput id="sign-up-confirm-password" label="Confirm Password"/>
      <p>By clicking the Sign Up button below, you agree to our Terms of Service and Privacy Policy.</p>
      <PrimaryButton>Sign Up</PrimaryButton>
    </form>
  }
  {
    activeTab === tabs[1].id &&
      <SignUpStep2 />
  }
</div>;
