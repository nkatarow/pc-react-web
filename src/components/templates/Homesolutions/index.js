import React from 'react';
import PropTypes from 'prop-types';

import Hero from '../../molecules/Hero/';
import mobileHero from './homesolutions-hero-mobile.jpg';
import desktopHero from './homesolutions-hero-desktop.jpg';
import Introduction from '../../molecules/Introduction/';

const Homesolutions = props => (
  <div>
    <Hero
      isMobile={props.isMobile}
      mobileHero={mobileHero}
      desktopHero={desktopHero}
      headline="Powerful. Flexible. Accurate."
      copy="HomeSolutions.NET is a comprehensive cloud-based agency management EMR solution proven to help home health organizations improve clinical, operational, financial and regulatory performance."
    />

    <Introduction
      isMobile={props.isMobile}
      headline="Experience data-driven healthcare."
      copy="From admissions to scheduling, coding, orders, visit reconciliation, eligibility, billing, AR, HR and payroll preparation processes, HomeSolutions.NET can improve revenue cycle management performance and overall efficiency."
      smallCopy="With the web-based HomeSolutions.NET Manager, agencies can effectively manage workflow by moving away from paper-driven processes. For field staff, homecare agencies can choose between Scannable Forms, Telephony or Mobile Device-based point-of-care methods, from nursing and therapy to paraprofessional disciplines."
    />
  </div>
);

export default Homesolutions;

Homesolutions.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};
