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
    const debounceTime = 500;

    this.listener = debounce(this.resizeHandler.bind(this), debounceTime);
    window.addEventListener('resize', this.listener);

    this.resizeHandler();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.listener);
  }

  resizeHandler() {
    let newIsMobile = this.props.isMobile;

    if (window.innerWidth >= 800) {
      newIsMobile = false;
    } else {
      newIsMobile = true;
    }

    if (newIsMobile !== this.props.isMobile) {
      this.props.updateIsMobile(newIsMobile);
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header isMobile={this.props.isMobile} />
          <Routes />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  isMobile: state.mobilestate.isMobile,
});

const mapDispatchToProps = dispatch => ({
  updateIsMobile: newIsMobile => dispatch({ type: actionTypes.UPDATE_IS_MOBILE, isMobile: newIsMobile }),
  // updateDimensions: (newWidth, newHeight) => dispatch({ type: actionTypes.UPDATE_DIMENSIONS, width: newWidth, height: newHeight }),
});

App.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  updateIsMobile: PropTypes.func.isRequired,
  // updateDimensions: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
