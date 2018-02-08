import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import Title from '../../atoms/title/';
import StrykerLogo from './stryker-logo.svg';
import './style.css';

const PrimaryNav = props => (
  <div className="primary">
    { !props.isMobile &&
      <div className="branding-bar">
        <NavLink exact to="/">
          <Title tag="h2" theme="section-title">Data Solutions</Title>
        </NavLink>
        <Link to="https://www.stryker.com/us/en/index.html" target="_blank">
          <img src={StrykerLogo} alt="Stryker" />
        </Link>
      </div>
    }
    <nav>
      <NavLink to="/health-ems">Health EMS</NavLink>
      <NavLink to="/lifenet-system">LifeNet System</NavLink>
      <NavLink to="/code-stat">Code-Stat</NavLink>
      <NavLink to="/homesolutions-net">Homesolutions.net</NavLink>
      <NavLink to="/professional-services">Professional Services</NavLink>
      <NavLink to="/contact-us">Contact Us</NavLink>
    </nav>
  </div>
);
PrimaryNav.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default PrimaryNav;
