import React from "react";

const dev6Logo = require("../../images/logos/dev6logo-white.svg");
const year = new Date().getUTCFullYear();

const Footer = () => <footer>
  <div>
    <img src={dev6Logo} alt="Dev 6 Logo" />
    <div>
      &copy; {year} Aquent DEV6
    </div>
  </div>
  <div>
    <div>
      4 Robert Speck Parkway Suite 240 <br />
      Mississauga ON L4Z 1S1 <br />
      Canada
    </div>
    <div>
      <strong>Toll Free:</strong> (866) 464-7790<br />
      <strong>Office:</strong> (905) 897-7790<br />
      <strong>Fax:</strong> (905) 897-9952<br />
    </div>
  </div>
</footer>;

export default Footer;
