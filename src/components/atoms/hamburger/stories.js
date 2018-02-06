import React from 'react';
import { storiesOf } from '@storybook/react'; //eslint-disable-line
import { action } from '@storybook/addon-actions'; //eslint-disable-line
import HamburgerMenu from './';

storiesOf('HamburgerMenu', module)
  .add('default', () => <HamburgerMenu status={false} onClick={action('clicked')} />)
  .add('open', () => <HamburgerMenu status onClick={action('clicked')} />);
