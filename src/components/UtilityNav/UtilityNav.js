import React from 'react';
import { Link } from 'react-router-dom';

const UtilityNav = () => (
  <nav>
    <Link to="/">
      <img src="" alt="Physio-Control" />
    </Link>

    <h2>Login:</h2>
    <Link to="/" target="_blank">Health EMS</Link>
    <Link to="/" target="_blank">LifeNet System</Link>
  </nav>
);

export default UtilityNav;
