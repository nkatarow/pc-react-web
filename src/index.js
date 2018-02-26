// For < IE11 Support
import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/';
import App from './App';

import './_settings/base.css';
import './_settings/ie.css';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
