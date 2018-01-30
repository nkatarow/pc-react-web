import React from 'react';
import { Link } from 'react-router-dom';

const PrimaryNav = () => (
  <nav>
    <div>
      <Link to="/">
        <img src="" alt="Data Solutions" />
      </Link>
      <Link to="https://www.stryker.com/us/en/index.html" target="_blank">
        <img src="" alt="Stryker" />
      </Link>
    </div>

    <Link to="/health-ems">Health EMS</Link>
    <Link to="/lifenet-systems">LifeNet System</Link>
    <Link to="/code-stat">Code-Stat</Link>
    <Link to="/homesolutions-net">Homesolutions.net</Link>
    <Link to="/professional-services">Professional Services</Link>
    <Link to="/contact-us">Contact Us</Link>
  </nav>
);

export default PrimaryNav;
