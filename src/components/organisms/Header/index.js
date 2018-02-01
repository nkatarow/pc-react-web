import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import HamburgerMenu from '../../../components/atoms/Hamburger/';
import UtilityNav from '../../../components/molecules/UtilityNav/';
import PrimaryNav from '../../../components/molecules/PrimaryNav/';
import { Head, Topbar, Navigation } from './styles';

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
    if (newState !== this.state.isOpen) {
      this.setState({ isOpen: newState });
    }

    return newState;
  };

  render() {
    return (
      <Head>
        { this.props.isMobile &&
          <Topbar>
            <HamburgerMenu
              status={this.state.isOpen}
              toggle={() => this.toggleNav(!this.state.isOpen)}
            />
            <h2>Physio-Control Data Solutions</h2>
          </Topbar>
        }

        <Navigation className={this.state.isOpen && 'open'}>
          <UtilityNav />
          <PrimaryNav isMobile={this.props.isMobile} />
        </Navigation>
      </Head>
    );
  }
}

Header.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

