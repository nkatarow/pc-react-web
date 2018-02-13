import React from 'react';
import { storiesOf } from '@storybook/react'; //eslint-disable-line
import { Provider } from 'react-redux';
import store from '../../../store/store';

import Hero from './';
import mobileHero from '../../templates/Homepage/_img/hp-hero-mobile.jpg';
import desktopHero from '../../templates/Homepage/_img/hp-hero-desktop.jpg';

const story = storyFn => (
  <Provider store={store}>
    {storyFn()}
  </Provider>
);

storiesOf('Hero', module)
  .addDecorator(story)
  .add('Default', () => (
    <Hero
      mobileHero={mobileHero}
      desktopHero={desktopHero}
    />
  ))
  .add('Custom Copy', () => (
    <Hero
      mobileHero={mobileHero}
      desktopHero={desktopHero}
      headline="Quickly access the information to optimize performance."
      copy="Easy, customizable documentation with advanced reporting can help you to improve patient care and service delivery."
    />
  ));
