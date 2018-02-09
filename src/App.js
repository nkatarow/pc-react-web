import React, { Component } from 'react';
import debounce from 'lodash/debounce';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// Routes
import Routes from './routes';

// Redux
import * as actionTypes from './store/actions';

// Organisms
import Header from './components/organisms/Header/';
import Footer from './components/organisms/Footer/';

class App extends Component {
  componentDidMount() {
    const debounceTime = 250;

    this.listener = debounce(this.resizeHandler.bind(this), debounceTime);
    window.addEventListener('resize', this.listener);

    this.resizeHandler();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.listener);
  }

  resizeHandler() {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
    let newIsMobile = this.props.isMobile;
    let newMobileNav = this.props.mobileNav;

    if (window.outerWidth >= 1080) {
      newMobileNav = false;
    } else if (window.innerWidth >= 800) {
      newIsMobile = false;
      newMobileNav = true;
    } else {
      newIsMobile = true;
    }

    if (newIsMobile !== this.props.isMobile) {
      this.props.updateIsMobile(newIsMobile);
    }

    if (newMobileNav !== this.props.mobileNav) {
      this.props.updateMobileNav(newMobileNav);
    }

    this.props.updateDimensions(newWidth, newHeight);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header mobileNav={this.props.mobileNav} />
          <Routes />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  mobileNav: state.mobilestate.mobileNav,
  isMobile: state.mobilestate.isMobile,
});

const mapDispatchToProps = dispatch => ({
  updateMobileNav: newMobileNav => dispatch({ type: actionTypes.UPDATE_MOBILE_NAV, mobileNav: newMobileNav }),
  updateIsMobile: newIsMobile => dispatch({ type: actionTypes.UPDATE_IS_MOBILE, isMobile: newIsMobile }),
  updateDimensions: (newWidth, newHeight) => dispatch({ type: actionTypes.UPDATE_DIMENSIONS, width: newWidth, height: newHeight }),
});

App.propTypes = {
  mobileNav: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
  updateIsMobile: PropTypes.func.isRequired,
  updateMobileNav: PropTypes.func.isRequired,
  updateDimensions: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
