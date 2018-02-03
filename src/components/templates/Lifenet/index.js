import React from 'react';
import PropTypes from 'prop-types';

import Hero from '../../molecules/Hero/';
import mobileHero from './lifenet-hero-mobile.jpg';
import desktopHero from './lifenet-hero-desktop.jpg';

import Introduction from '../../molecules/Introduction/';

const Lifenet = props => (
  <div>
    <Hero
      isMobile={props.isMobile}
      mobileHero={mobileHero}
      desktopHero={desktopHero}
      headline="Smoother communication. Faster care. Stronger teamwork."
      copy="The LIFENET® System is a comprehensive cloud-based platform that intelligently manages and delivers patient information and device data that EMS and hospital teams need to work together seamlessly, minimize time to treatment, and improve outcomes."
    />

    <Introduction
      isMobile={props.isMobile}
      headline="Take action with your data."
      copy="The LIFENET System manages and delivers patient and device data whenever and wherever it’s needed. Hospitals get advance notice of incoming critical patients. Care team members are activated in seconds to ensure patients receive timely care. Device readiness is tracked and managed effortlessly."
    />
  </div>
);

export default Lifenet;

Lifenet.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};
