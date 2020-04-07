import React from "react";
import "./signup-step2.css";
import FormInput from "../FormInput/FormInput";
import {PrimaryButton} from "../../PrimaryButton/PrimaryButton";

export const SignUpStep2 = () => <div className="step2-component">
  <h2>Awesome!</h2>
  <p>Welcome to the club, where can we ship your shirts to? You can always provide this information at checkout.</p>
  <form className="step2-address">
    <FormInput id="step2-name" label="Name" placeholder="Johnny Applseed" />
    <div className="step2-row">
      <FormInput id="step2-address1" label="Address 1" placeholder="123 Anywhere Ave" />
      <FormInput id="step2-address2" label="Address 2" placeholder="Suite 101"  />
    </div>
    <div className="step2-row">
      <FormInput id="step2-phone-number" label="Phone Number" placeholder="555-123-1234" />
      <FormInput id="step2-city" label="City" placeholder="Toronto"  />
    </div>
    <div className="step2-row">
      <FormInput id="step2-country" label="Country" />
      <div className="step2-row">
        <FormInput id="step2-province" label="Province" />
        <FormInput id="step2-postal-code" label="Postal Code" placeholder="L5N 2N5" />
      </div>
    </div>
    <div className="actions">
      <PrimaryButton>Do This later</PrimaryButton>
      <PrimaryButton>Save</PrimaryButton>
    </div>
  </form>
</div>;
