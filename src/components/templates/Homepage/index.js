import React from 'react';
import PropTypes from 'prop-types';

import Hero from '../../molecules/Hero/';
import mobileHero from './hp-hero-mobile.jpg';
import desktopHero from './hp-hero-desktop.jpg';

import Introduction from '../../molecules/Introduction/';
import introMobileImage from './hp-intro-bg-mobile.png';
import introDesktopImage from './hp-intro-bg-desktop.png';

const Homepage = props => (
  <div>
    <Hero
      isMobile={props.isMobile}
      mobileHero={mobileHero}
      desktopHero={desktopHero}
      headline="Quickly access the information to optimize performance."
      copy="Easy, customizable documentation with advanced reporting can help you to improve patient care and service delivery."
    />

    <Introduction
      isMobile={props.isMobile}
      introMobileImage={introMobileImage}
      introDesktopImage={introDesktopImage}
      headline="Integrated data solutions so you can deliver better care"
      copy="An unmatched set of data tools connects and accelerates caregiving teams to improve patient outcomes and operational efficiency. Choose the solution that meets your clinical and operational needs, then deploy quickly with support from a true partner — and the leader in emergency medicine and resuscitation."
    />
  </div>
);

export default Homepage;

Homepage.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};
