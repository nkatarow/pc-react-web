import React from 'react';
import PropTypes from 'prop-types';

// Atoms
import Title from '../../atoms/title/';
import Button from '../../atoms/button/';

// Molecules
import Hero from '../../molecules/Hero/';
import HalfHalf from '../../molecules/_layouts/HalfHalf';
import Introduction from '../../molecules/Introduction/';
import ProductIntro from '../../molecules/ProductIntro/';

// Organisms
import Accordion from '../../organisms/Accordion/';
import AccordionItem from '../../organisms/Accordion/AccordionItem/';
import AccordionItemTitle from '../../organisms/Accordion/AccordionItemTitle/';
import AccordionItemBody from '../../organisms/Accordion/AccordionItemBody/';

// Images
// TODO: Deliver mobile/hero images with responsive images
import mobileHero from './_img/hp-hero-mobile.jpg';
import desktopHero from './_img/hp-hero-desktop.jpg';
import introMobileImage from './_img/hp-intro-bg-mobile.png';
import introDesktopImage from './_img/hp-intro-bg-desktop.png';

import healthEmsIcon from './_img/healthems-icon.svg';
import lifenetIcon from './_img/lifenet-icon.svg';
import healthEmsImg from './_img/healthems.jpg';
import lifenetImg from './_img/lifenet.jpg';

import codestatIcon from './_img/codestat-icon.svg';
import codestatImg from './_img/codestat.jpg';

import homesolutionsImg from './_img/homesolutions.jpg';
import homesolutionsIcon from './_img/homesolutions-icon.svg';


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

    <ProductIntro
      contextHead="Product Options"
      contextColor="selective-yellow"
      headline="The right data support for any healthcare environment"
      copy="Capture the rich flow of data that starts with a patient event to empower better decisions, faster team mobilization, and improved outcomes. A continuum of data solutions makes it faster and easier to provide better, safer, and more efficient care."
    />

    <Accordion accordion activeItems={[1]}>

      <AccordionItem expanded>
        <AccordionItemTitle>
          <img src={healthEmsIcon} alt="" />
          <div>
            <Title tag="h3" theme="headline">HealthEMS<sup>&trade;</sup></Title>
            <p>ePCR Solution</p>
          </div>
        </AccordionItemTitle>

        <AccordionItemBody>
          <HalfHalf>
            <div>
              <Title tag="p" theme="subhead">Easy, customizable documentation with advanced reporting to improve patient care and service delivery.</Title>
              <p>HealthEMS is a patient-based, protocol-driven electronic patient care record (ePCR) system that makes documentation and critical operational processes as effortless as possible. This suite of flexible software tools provides all the documentation required for improved patient care, accurate billing, and advanced reporting. Quickly configure it to match your organizational needs. One connected system makes it easier to receive, share, and find actionable information that can make a difference inpatient outcomes, regulatory compliance, and operational and financial performance.</p>
              <Button>More about HealthEMS</Button>
            </div>
            <div>
              <img src={healthEmsImg} alt="" />
            </div>
          </HalfHalf>
        </AccordionItemBody>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemTitle>
          <img src={lifenetIcon} alt="" />
          <div>
            <Title tag="h3" theme="subhead">LIFENET<sup>&reg;</sup> System</Title>
            <p>Telemedicine & Asset Management System</p>
          </div>
        </AccordionItemTitle>

        <AccordionItemBody>
          <HalfHalf>
            <div>
              <Title tag="p" theme="headline">Smoother communication. Faster care. Stronger teams.</Title>
              <p>The LIFENET® System is a comprehensive cloud-based platform that provides the information and tools that EMS and hospital teams need to work together seamlessly, minimize time to treatment, and improve outcomes. Access and share the critical patient data that can help you reduce time to treatment for STEMI patients, stroke patients, and other emergencies. Quickly and easily obtain consultations from remote clinicians and activate care teams across your organization. Rapidly distribute post-event review insights and manage your LIFEPAK device fleet wide with innovative tools that help save time and empower improvement.</p>
              <Button>More about LifeNET System</Button>
            </div>
            <div>
              <img src={lifenetImg} alt="" />
            </div>
          </HalfHalf>
        </AccordionItemBody>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemTitle>
          <img src={codestatIcon} alt="" />
          <div>
            <Title tag="h3" theme="subhead">Code-Stat<sup>&trade;</sup> System</Title>
            <p>Code Review Software</p>
          </div>
        </AccordionItemTitle>

        <AccordionItemBody>
          <HalfHalf>
            <div>
              <Title tag="p" theme="headline">The insights you need to improve performance and patient outcomes.</Title>
              <p>Identify and quickly make targeted improvements when you can easily understand team performance immediately after a response. CODE-STAT software gives you precision access to relevant, detailed CPR and resuscitation performance data to help you monitor and improve response. Customized reports deliver actionable information back to your teams for improvement.</p>
              <Button>More about Code-Stat System</Button>
            </div>
            <div>
              <img src={codestatImg} alt="" />
            </div>
          </HalfHalf>
        </AccordionItemBody>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemTitle>
          <img src={homesolutionsIcon} alt="" />
          <div>
            <Title tag="h3" theme="subhead">Homesolutions.net</Title>
            <p>Comprehensive Home Healthcare Management System</p>
          </div>
        </AccordionItemTitle>

        <AccordionItemBody>
          <HalfHalf>
            <div>
              <Title tag="p" theme="headline">Streamline the operational intricacies of delivering home healthcare.</Title>
              <p>Improve the clinical, operational, financial, and regulatory performance of your home health organization. This cloud-based, agency management EMR solution provides comprehensive tools for mobile point-of-care documentation, revenue cycle management, and data dashboards for enhancing workflows and quality assurance. Move beyond error-prone paperwork to enhance processes for scheduling, coding, eligibility, visit reconciliation, and more.</p>
              <Button>More about Homesolutions.net</Button>
            </div>
            <div>
              <img src={homesolutionsImg} alt="" />
            </div>
          </HalfHalf>
        </AccordionItemBody>
      </AccordionItem>
    </Accordion>
  </div>
);

export default Homepage;

Homepage.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};
