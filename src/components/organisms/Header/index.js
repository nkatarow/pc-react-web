import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import HamburgerMenu from '../../../components/atoms/hamburger/';
import UtilityNav from '../../../components/molecules/UtilityNav/';
import PrimaryNav from '../../../components/molecules/PrimaryNav/';
import './style.css';

export default class Header extends PureComponent {
  state = {
    isOpen: false,
  }

  componentWillReceiveProps(newProps) {
    if (newProps.isMobile !== this.props.isMobile) {
      this.toggleNav(true);
    } else {
      this.toggleNav(false);
    }
  }

  toggleNav = (newState) => {
    if (this.props.isMobile && newState !== this.state.isOpen) {
      this.setState({ isOpen: newState });
    }
  };

  render() {
    let navContainerClass = '';
    if (this.state.isOpen) { navContainerClass = 'open'; }
    return (
      <header>
        { this.props.isMobile &&
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
          <PrimaryNav isMobile={this.props.isMobile} />
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

