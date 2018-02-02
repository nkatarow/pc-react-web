import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import HamburgerMenu from './';

storiesOf('HamburgerMenu', module)
  .add('default', () => <HamburgerMenu status={false} onClick={action('clicked')} />)
  .add('open', () => <HamburgerMenu status onClick={action('clicked')} />);
