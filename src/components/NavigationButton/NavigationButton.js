import React from "react";
import "./navigation-button.css";

const NavigationButton = ({onClick}) => <button className="navigation" onClick={onClick}>
  <div className="line" />
  <div className="line" />
  <div className="line" />
</button>;

export default NavigationButton;
