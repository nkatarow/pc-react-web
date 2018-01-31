import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Homepage from './containers/Homepage/Homepage';

import UtilityNav from './components/UtilityNav/UtilityNav';
import PrimaryNav from './components/PrimaryNav/PrimaryNav';

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <UtilityNav />
        <PrimaryNav />
      </header>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  </Router>
);


export default App;
