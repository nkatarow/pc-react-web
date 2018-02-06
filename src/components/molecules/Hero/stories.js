import React from 'react';
import { storiesOf } from '@storybook/react';

import Hero from './';
import mobileHero from '../../templates/Homepage/_img/hp-hero-mobile.jpg';
import desktopHero from '../../templates/Homepage/_img/hp-hero-desktop.jpg';

storiesOf('Hero', module)
  .add('Default', () => (
    <Hero
      isMobile={false}
      mobileHero={mobileHero}
      desktopHero={desktopHero}
    />
  ))
  .add('Custom Copy', () => (
    <Hero
      isMobile={false}
      mobileHero={mobileHero}
      desktopHero={desktopHero}
      headline="Quickly access the information to optimize performance."
      copy="Easy, customizable documentation with advanced reporting can help you to improve patient care and service delivery."
    />
  ));
