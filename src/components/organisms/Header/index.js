import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import HamburgerMenu from '../../../components/atoms/hamburger/';

import UtilityNav from '../../../components/molecules/UtilityNav/';
import PrimaryNav from '../../../components/molecules/PrimaryNav/';

import './style.css';

class Header extends PureComponent {
  state = {
    isOpen: false,
  }

  componentWillReceiveProps(newProps) {
    if ((newProps.mobileNav) && (newProps.mobileNav !== this.props.mobileNav)) {
      this.toggleNav(false);
    } else if ((!newProps.mobileNav) && (newProps.mobileNav !== this.props.mobileNav)) {
      this.toggleNav(true);
    }
  }

  toggleNav = (newState) => {
    this.setState({ isOpen: newState });
  };

  render() {
    let navContainerClass = '';

    if (this.state.isOpen) { navContainerClass = 'open'; }

    return (
      <header>
        { this.props.mobileNav &&
          <div className="top-bar">
            <HamburgerMenu
              status={this.state.isOpen}
              onClick={() => this.toggleNav(!this.state.isOpen)}
            />
            <h2>Physio-Control Data Solutions</h2>
          </div>
        }

        <div id="nav-container" className={navContainerClass}>
          <UtilityNav />
          <PrimaryNav mobileNav={this.props.mobileNav} />
        </div>
      </header>
    );
  }
}

export default withRouter(Header);

Header.propTypes = {
  mobileNav: PropTypes.bool.isRequired,
};
