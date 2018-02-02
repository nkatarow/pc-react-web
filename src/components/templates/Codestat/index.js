import React from 'react';
import PropTypes from 'prop-types';

import Hero from '../../molecules/Hero/';
import mobileHero from './codestat-hero-mobile.jpg';
import desktopHero from './codestat-hero-desktop.jpg';

const Codestat = props => (
  <Hero
    isMobile={props.isMobile}
    mobileHero={mobileHero}
    desktopHero={desktopHero}
    headline="Insights to Improve Performance and Patient Outcomes"
    copy="Turn your passion for saving lives into targeted improvements — CODE-STAT Data Review Software lets you easily understand team performance immediately after response."
  />
);

export default Codestat;

Codestat.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};
