import React from "react";
import {Link} from "react-router-dom";
import NavigationButton from "../NavigationButton/NavigationButton";
import {PrimaryButton} from "../PrimaryButton/PrimaryButton";

const headerLogo = require("../../images/navlogo.png");
const shoppingCartIcon = require("../../images/icons/icon-basket.svg");

const Header = () => <header>
  <div>
    <NavigationButton onClick={() => alert("Nav Button Clicked")} />
    <Link to="/">
      <img src={headerLogo} alt="Shirtastic Logo - By Aquent Dev 6" />
    </Link>
  </div>
  <div>
    <Link to="/create-shirt">
      <PrimaryButton>New Design</PrimaryButton>
    </Link>
    <button onClick={() => alert("Shopping Cart Button Clicked")}>
      <img src={shoppingCartIcon} />
      <div className="total-items">
        0
      </div>
    </button>
  </div>
</header>;

export default Header;
