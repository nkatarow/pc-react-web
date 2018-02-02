import React from 'react';
import PropTypes from 'prop-types';

import Hero from '../../molecules/Hero/';
import mobileHero from './homesolutions-hero-mobile.jpg';
import desktopHero from './homesolutions-hero-desktop.jpg';

const Homesolutions = props => (
  <Hero
    isMobile={props.isMobile}
    mobileHero={mobileHero}
    desktopHero={desktopHero}
    headline="Powerful. Flexible. Accurate."
    copy="HomeSolutions.NET is a comprehensive cloud-based agency management EMR solution proven to help home health organizations improve clinical, operational, financial and regulatory performance."
  />
);

export default Homesolutions;

Homesolutions.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};
