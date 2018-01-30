import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import UtilityNav from './components/UtilityNav/UtilityNav';
import PrimaryNav from './components/PrimaryNav/PrimaryNav';
import Homepage from './containers/Homepage/Homepage';

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <UtilityNav />
        <PrimaryNav />
      </header>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/" component="" />
      </Switch>
    </div>
  </Router>
);


export default App;
