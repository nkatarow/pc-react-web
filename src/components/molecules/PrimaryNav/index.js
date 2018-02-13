import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import Title from '../../atoms/title/';
import StrykerLogo from './stryker-logo.svg';
import './style.css';

class PrimaryNav extends PureComponent {
  handleClick() {
    document.activeElement.blur();

    if (this.props.mobileNav) {
      this.props.toggleNav(false);
    }
  }

  render() {
    this.handleClick = this.handleClick.bind(this);

    return (
      <div className="primary">
        { !this.props.mobileNav &&
        <div className="branding-bar">
          <NavLink exact to="/" onClick={this.handleClick}>
            <Title tag="h2" theme="section-title">Data Solutions</Title>
          </NavLink>
          <Link to="https://www.stryker.com/us/en/index.html" target="_blank" onClick={this.handleClick}>
            <img src={StrykerLogo} alt="Stryker" />
          </Link>
        </div>
    }
        <nav>
          <NavLink to="/health-ems" onClick={this.handleClick}>Health EMS</NavLink>
          <NavLink to="/lifenet-system" onClick={this.handleClick}>LifeNet System</NavLink>
          <NavLink to="/code-stat" onClick={this.handleClick}>Code-Stat</NavLink>
          <NavLink to="/homesolutions-net" onClick={this.handleClick}>Homesolutions.net</NavLink>
          <NavLink to="/professional-services" onClick={this.handleClick}>Professional Services</NavLink>
          <NavLink to="/contact-us" onClick={this.handleClick}>Contact Us</NavLink>
        </nav>
      </div>
    );
  }
}

PrimaryNav.propTypes = {
  toggleNav: PropTypes.func.isRequired,
  mobileNav: PropTypes.bool.isRequired,
};

export default PrimaryNav;
