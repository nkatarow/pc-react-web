import React from 'react';
import PropTypes from 'prop-types';

import Hero from '../../molecules/Hero/';
import mobileHero from './hp-hero-mobile.jpg';
import desktopHero from './hp-hero-desktop.jpg';

const Homepage = props => (
  <Hero
    isMobile={props.isMobile}
    mobileHero={mobileHero}
    desktopHero={desktopHero}
    headline="Quickly access the information to optimize performance."
    copy="Easy, customizable documentation with advanced reporting can help you to improve patient care and service delivery."
  />
);

export default Homepage;

Homepage.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};
