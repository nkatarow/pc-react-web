import React, { Component } from 'react';
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
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }

  updateDimensions() {
    // const newWidth = window.innerWidth;
    // const newHeight = window.innerHeight;
    let newIsMobile = this.props.isMobile;

    if (window.innerWidth >= 800 && this.props.isMobile) {
      newIsMobile = false;
    } else {
      newIsMobile = true;
    }
    // this.props.updateDimensions(newWidth, newHeight);
    this.props.updateIsMobile(newIsMobile);
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
