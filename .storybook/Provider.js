import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { browserHistory } from 'react-router';
import {store} from '../src/store/store.js';

const configStore = store(browserHistory, {});

export default function Provider({ story }) {
  return (
    <ReduxProvider store={configStore}>
      {story}
    </ReduxProvider>
  );
};
