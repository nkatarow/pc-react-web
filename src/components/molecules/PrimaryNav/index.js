import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Title from '../../atoms/title/';
import StrykerLogo from './stryker-logo.svg';
import './style.css';

const PrimaryNav = props => (
  <div className="primary">
    { !props.isMobile &&
      <div className="branding-bar">
        <Link to="/">
          <Title tag="h2" theme="section-title">Data Solutions</Title>
        </Link>
        <Link to="https://www.stryker.com/us/en/index.html" target="_blank">
          <img src={StrykerLogo} alt="Stryker" />
        </Link>
      </div>
    }
    <nav>
      <Link to="/health-ems">Health EMS</Link>
      <Link to="/lifenet-system">LifeNet System</Link>
      <Link to="/code-stat">Code-Stat</Link>
      <Link to="/homesolutions-net">Homesolutions.net</Link>
      <Link to="/professional-services">Professional Services</Link>
      <Link to="/contact-us">Contact Us</Link>
    </nav>
  </div>
);

PrimaryNav.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default PrimaryNav;
