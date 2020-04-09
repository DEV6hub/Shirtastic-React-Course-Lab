import React from "react";
import FormInput from "../FormInput/FormInput";
import PrimaryButton from "../../PrimaryButton/PrimaryButton";
import Tabs from "../../Tabs/Tabs";
import "./sign-up.css";
import SignUpStep2 from "../SignUpStep2/SignUpStep2";
import {SignUpTabs} from "../../../constants/signupTabs";

export const SignUp = ({activeTab, updateTab}) => {
  return <div className={`sign-up-component ${activeTab === SignUpTabs[1].id ? 'step2' : ''}`}>
    { activeTab === SignUpTabs[0].id && <h2>Sign up</h2>}
    <div className="tabs-container">
      <Tabs tabs={SignUpTabs} active={activeTab} onTabClick={tabId => updateTab(tabId)} />
    </div>
    {
      activeTab === SignUpTabs[0].id &&
      <form onSubmit={(e) => e.preventDefault()} className="sign-up">
        <FormInput id="sign-up-email-address" label="Email Address" placeholder="Your Email Address"/>
        <FormInput id="sign-up-password" label="Password"/>
        <FormInput id="sign-up-confirm-password" label="Confirm Password"/>
        <p>By clicking the Sign Up button below, you agree to our Terms of Service and Privacy Policy.</p>
        <PrimaryButton>Sign Up</PrimaryButton>
      </form>
    }
    {
      activeTab === SignUpTabs[1].id &&
      <SignUpStep2 />
    }
  </div>;
};
