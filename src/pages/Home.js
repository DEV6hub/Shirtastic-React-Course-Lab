import React from "react";
import {Login} from "../components/Login/Login";
import {SignUp} from "../components/SignUp/SignUp";
import "./home.css";

export const Home = () => <div className="home">
  <div className="login">
    <h2>Login</h2>
    <Login/>
  </div>
  <div className="middle">
    Logo Here
  </div>
  <div className="sign-up">
    <SignUp/>
  </div>
</div>;
