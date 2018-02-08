import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actionTypes from './store/actions';

// Organisms
import Header from './components/organisms/Header/';
import Footer from './components/organisms/Footer/';

// Templates
import Homepage from './components/templates/Homepage/';
import HealthEMS from './components/templates/HealthEMS/';
import Lifenet from './components/templates/Lifenet/';
import Codestat from './components/templates/Codestat/';
import Homesolutions from './components/templates/Homesolutions/';

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

          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/health-ems" component={HealthEMS} />
            <Route path="/lifenet-system" component={Lifenet} />
            <Route path="/code-stat" component={Codestat} />
            <Route path="/homesolutions-net" component={Homesolutions} />
          </Switch>

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
