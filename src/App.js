import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Homepage from './components/templates/Homepage/';
import HealthEMS from './components/templates/HealthEMS/';
import Lifenet from './components/templates/Lifenet/';
import Codestat from './components/templates/Codestat/';
import Homesolutions from './components/templates/Homesolutions/';

import Header from './components/organisms/Header/';
import Footer from './components/organisms/Footer/';

export default class App extends Component {
  state = {
    dimensions: {
      width: window.innerWidth,
      height: window.innerHeight,
    },
    isMobile: true,
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }

  updateDimensions() {
    let newDimensions = { ...this.state.dimensions };
    let newIsMobile = this.state.dimensions.isMobile;

    if (window.innerWidth >= 800 && this.state.isMobile) {
      newIsMobile = false;
    } else {
      newIsMobile = true;
    }

    newDimensions = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    this.setState({
      dimensions: newDimensions,
      isMobile: newIsMobile,
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header isMobile={this.state.isMobile} />

          <Switch>
            <Route path="/" exact render={() => (<Homepage isMobile={this.state.isMobile} />)} />
            <Route path="/health-ems"render={() => (<HealthEMS isMobile={this.state.isMobile} />)} />
            <Route path="/lifenet-system"render={() => (<Lifenet isMobile={this.state.isMobile} />)} />
            <Route path="/code-stat"render={() => (<Codestat isMobile={this.state.isMobile} />)} />
            <Route path="/homesolutions-net"render={() => (<Homesolutions isMobile={this.state.isMobile} />)} />
          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}
