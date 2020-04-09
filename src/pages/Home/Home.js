import React, {useState} from "react";
import {Login} from "../../components/Forms/Login/Login";
import {SignUp} from "../../components/Forms/SignUp/SignUp";
import {SignUpTabs} from "../../constants/signupTabs";
import "./home.css";

const middleLogo = require("../../images/Shirtastic-vertical.svg");

const year = new Date().getUTCFullYear();

const Home = () => {

  const [step, setStep] = useState("step-1-form");

  return <div className="home">
    {step === SignUpTabs[0].id && <div className="left-column">
      <Login/>
    </div>}
    <div className="middle-column">
      <div>&nbsp;</div>
      <img src={middleLogo} alt="Shirtastic by Dev6" />
      <span>&copy; {year} Aquent DEV6 </span>
    </div>
    <div className="right-column">
      <SignUp activeTab={step} updateTab={setStep}/>
    </div>
  </div>;
};
export default Home;
