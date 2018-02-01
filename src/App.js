import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Homepage from './components/pages/Homepage';
import Header from './components/organisms/Header/';

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
            <Route exact path="/" component={Homepage} />
            <Route path="/" component={Homepage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

