import React from 'react';
import PropTypes from 'prop-types';

import Hero from '../../molecules/Hero/';
import mobileHero from './healthems-hero-mobile.jpg';
import desktopHero from './healthems-hero-desktop.jpg';
import Introduction from '../../molecules/Introduction/';

const HealthEMS = props => (
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
      headline="Easy. Empowering. Accurate."
      copy="Your dynamic work environment demands speed and flexibility, and the HealthEMS electronic patient care record (ePCR) provides both."
      smallCopy="Make operations and documentation easier and more efficient with this patient-based, protocol-driven ePCR that helps you easily receive, share, and find actionable data. This flexible solution can be customized to match your needs, from smooth CAD integration to accurate billing and reporting."
    />
  </div>
);

export default HealthEMS;

HealthEMS.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};
