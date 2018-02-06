import React from 'react';
import { storiesOf } from '@storybook/react'; //eslint-disable-line
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import CTA from './';

storiesOf('CTA', module)
  .add('Default', () => (
    <Router>
      <CTA />
    </Router>
  ))
  .add('Custom Copy', () => (
    <Router>
      <CTA
        headline="Custom Headline"
        linkText="Custom Link Text Here"
        linkUrl="/health-ems"
      />
    </Router>
  ));
