import React from 'react';
import PropTypes from 'prop-types';

import Hero from '../../molecules/Hero/';
import mobileHero from './lifenet-hero-mobile.jpg';
import desktopHero from './lifenet-hero-desktop.jpg';

const Lifenet = props => (
  <Hero
    isMobile={props.isMobile}
    mobileHero={mobileHero}
    desktopHero={desktopHero}
    headline="Smoother communication. Faster care. Stronger teamwork."
    copy="The LIFENET® System is a comprehensive cloud-based platform that intelligently manages and delivers patient information and device data that EMS and hospital teams need to work together seamlessly, minimize time to treatment, and improve outcomes."
  />
);

export default Lifenet;

Lifenet.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};
