import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../PrimaryButton/primary-button';
import './header.css';

import headerLogo from '../../../images/navlogo.png';
import shoppingCartIcon from '../../../images/icon-basket.svg';

const Header = () => (
  <header>
    <div className="left">
      <PrimaryButton
        onClick={() => {
          console.log('nav click');
        }}
      />
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
      <button
        type="button"
        className="cart-items"
        onClick={() => alert('Shopping Cart Button Clicked')}
      >
        <img className="cart-icon" src={shoppingCartIcon} alt="Icon of a shopping cart" />
        <div className="total-items">0</div>
      </button>
    </div>
  </header>
);

export default Header;
