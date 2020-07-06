import React from 'react';
import headerLogo from '../../../images/navlogo.png';
import './header.css';

const Header = () => (
  <header>
    <div>
      <img src={headerLogo} className="logo" alt="Shirtastic Logo" />
    </div>
  </header>
);

export default Header;
