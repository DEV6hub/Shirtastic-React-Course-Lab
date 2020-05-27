import React from 'react';
import { Link } from 'react-router-dom';
import CartControls from '../../CheckoutFlow/CartControls/CartControls';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';
import './header.css';
import headerLogo from '../../../images/navlogo.png';

const Header = () => {
  return (
    <header>
      <div className="left">
        <PrimaryButton
          btnStyle="navigation"
          onClick={() => {
            // TODO: AK: Implement call back;
            console.log('nav click');
          }}
        >
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </PrimaryButton>
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
        <CartControls />
      </div>
    </header>
  );
};

export default Header;
