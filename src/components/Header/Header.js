import React from "react";
import {Link} from "react-router-dom";
import NavigationButton from "../NavigationButton/NavigationButton";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import "./header.css";

const headerLogo = require("../../images/navlogo.png");
const shoppingCartIcon = require("../../images/icons/icon-basket.svg");

const Header = () => <header>
  <div className="left">
    <Link to="/catalog">
      <NavigationButton onClick={() => {}} />
    </Link>
    <div className="vertical-line" />
    <Link to="/">
      <img src={headerLogo} className="logo" alt="Shirtastic Logo - By Aquent Dev 6" />
    </Link>
  </div>
  <div className="right">
    <Link to="/create-shirt">
      <PrimaryButton>New Design</PrimaryButton>
    </Link>
    <div className="vertical-line" />
    <button className="cart-items" onClick={() => alert("Shopping Cart Button Clicked")}>
      <img className="cart-icon" src={shoppingCartIcon} alt="Icon of a shopping cart" />
      <div className="total-items">
        0
      </div>
    </button>
  </div>
</header>;

export default Header;
