import React from 'react';
import PropTypes from 'prop-types';

import Hero from '../../molecules/Hero/';
import mobileHero from './healthems-hero-mobile.jpg';
import desktopHero from './healthems-hero-desktop.jpg';

const HealthEMS = props => (
  <Hero
    isMobile={props.isMobile}
    mobileHero={mobileHero}
    desktopHero={desktopHero}
    headline="Quickly access the information to optimize performance."
    copy="Easy, customizable documentation with advanced reporting can help you to improve patient care and service delivery."
  />
);

export default HealthEMS;

HealthEMS.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};
