import React from "react";
import {Login} from "../components/Forms/Login/Login";
import {SignUp} from "../components/Forms/SignUp/SignUp";
import "./home.css";

const middleLogo = require("../images/Shirtastic-vertical.svg");

const year = new Date().getUTCFullYear();

export const Home = () => <div className="home">
  <div className="login">
    <Login/>
  </div>
  <div className="middle">
    <img src={middleLogo} alt="Shirtastic by Dev6" />
    <span>&copy; {year} Aquent DEV6 </span>
  </div>
  <div className="sign-up">
    <SignUp/>
  </div>
</div>;
