import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import Title from '../../atoms/title/';
import StrykerLogo from './_img/stryker-logo.svg';
import './style.css';

const PrimaryNav = (props) => {
  const handleClick = () => {
    document.activeElement.blur();

    if (props.mobileNav) {
      props.toggleNav(false);
    }
  };

  return (
    <div className="primary">
      { !props.mobileNav &&
      <div className="branding-bar">
        <NavLink exact to="/" onClick={handleClick}>
          <Title tag="h2" theme="section-title">Data Solutions</Title>
        </NavLink>
        <Link to="https://www.stryker.com/us/en/index.html" target="_blank" onClick={handleClick}>
          <img src={StrykerLogo} alt="Stryker" />
        </Link>
      </div>
    }
      <nav>
        <NavLink to="/health-ems" onClick={handleClick}>HealthEMS</NavLink>
        <NavLink to="/lifenet-system" onClick={handleClick}>LIFENET System</NavLink>
        <NavLink to="/code-stat" onClick={handleClick}>CODE-STAT</NavLink>
        <NavLink to="/homesolutions-net" onClick={handleClick}>HomeSolutions.net</NavLink>
        <NavLink to="/professional-services" onClick={handleClick}>Professional Services</NavLink>
        <NavLink to="/contact-us" onClick={handleClick}>Contact Us</NavLink>
      </nav>
    </div>
  );
};

PrimaryNav.propTypes = {
  toggleNav: PropTypes.func.isRequired,
  mobileNav: PropTypes.bool.isRequired,
};

export default PrimaryNav;
