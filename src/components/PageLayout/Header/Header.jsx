import React from 'react';
import headerLogo from '../../../images/navlogo.png';

const Header = () => (
  <header>
    <div>
      <img src={headerLogo} className="logo" alt="Shirtastic Logo" />
    </div>
  </header>
);

export default Header;
