import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from '../../atoms/Header/';
import StrykerLogo from './stryker-logo.svg';
import { Nav, BrandingBar } from './styles';

const PrimaryNav = props => (
  <Nav>
    { !props.isMobile &&
      <BrandingBar>
        <Link to="/">
          <Header tag="h2" appearance="h3">Data Solutions</Header>
        </Link>
        <Link to="https://www.stryker.com/us/en/index.html" target="_blank">
          <img src={StrykerLogo} alt="Stryker" />
        </Link>
      </BrandingBar>
    }
    <nav>
      <Link to="/health-ems">Health EMS</Link>
      <Link to="/lifenet-systems">LifeNet System</Link>
      <Link to="/code-stat">Code-Stat</Link>
      <Link to="/homesolutions-net">Homesolutions.net</Link>
      <Link to="/professional-services">Professional Services</Link>
      <Link to="/contact-us">Contact Us</Link>
    </nav>
  </Nav>
);

PrimaryNav.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default PrimaryNav;
