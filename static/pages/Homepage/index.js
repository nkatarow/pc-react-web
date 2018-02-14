import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Utilities
import getComponentImages from '../../_utility/getComponentImages';

// Atoms
import Title from '../../components/atoms/title/';
import Button, { ButtonTheme } from '../../components/atoms/button/';

// Molecules
import Hero from '../../components/molecules/Hero/';
import HalfHalf from '../../components/molecules/_layouts/HalfHalf';
import Introduction from '../../components/molecules/Introduction/';
import ProductIntro from '../../components/molecules/ProductIntro/';
import CTA from '../../components/molecules/CTA/';

// Organisms
import Accordion from '../../components/organisms/Accordion/';
import AccordionItem from '../../components/organisms/Accordion/AccordionItem/';
import AccordionItemTitle from '../../components/organisms/Accordion/AccordionItemTitle/';
import AccordionItemBody from '../../components/organisms/Accordion/AccordionItemBody/';
import Video from '../../components/organisms/Video/';

class Homepage extends PureComponent {
  componentDidMount() {
    document.title = 'Physio-Control Data Solutions';
    window.scrollTo(0, 0);
  }

  render() {
    const images = getComponentImages(require.context('./_img', false, /\.(png|jpe?g|svg)$/));

    return (
      <div>
        <Hero
          isMobile={this.props.isMobile}
          mobileHero={images['hp-hero-mobile.jpg']}
          desktopHero={images['hp-hero-desktop.jpg']}
          headline="Quickly access the information to optimize performance."
          copy="Easy, customizable documentation with advanced reporting can help you to improve patient care and service delivery."
        />

        <Introduction
          isMobile={this.props.isMobile}
          introMobileImage={images['hp-intro-bg-mobile.png']}
          introDesktopImage={images['hp-intro-bg-desktop.png']}
          headline="Integrated data solutions so you can deliver better care"
          copy="An unmatched set of data tools connects and accelerates caregiving teams to improve patient outcomes and operational efficiency. Choose the solution that meets your clinical and operational needs, then deploy quickly with support from a true partner — and the leader in emergency medicine and resuscitation."
        />

        <ProductIntro
          contextHead="Product Options"
          contextColor="selective-yellow"
          headline="The right data support for any healthcare environment"
          copy="Capture the rich flow of data that starts with a patient event to empower better decisions, faster team mobilization, and improved outcomes. A continuum of data solutions makes it faster and easier to provide better, safer, and more efficient care."
        />

        <Accordion accordion>

          <AccordionItem>
            <AccordionItemTitle>
              <img src={images['healthems-icon.svg']} alt="" />
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
                  <Button theme={ButtonTheme.OUTLINED}>
                    <Link to="/health-ems">More about Health EMS</Link>
                  </Button>
                </div>
                <div>
                  <img src={images['healthems.jpg']} alt="" />
                </div>
              </HalfHalf>
            </AccordionItemBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemTitle>
              <img src={images['lifenet-icon.svg']} alt="" />
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
                  <Button>
                    <Link to="/lifenet-system">More about LifeNET System</Link>
                  </Button>
                </div>
                <div>
                  <img src={images['lifenet.jpg']} alt="" />
                </div>
              </HalfHalf>
            </AccordionItemBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemTitle>
              <img src={images['codestat-icon.svg']} alt="" />
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
                  <Button>
                    <Link to="/code-stat">More about Code-Stat System</Link>
                  </Button>
                </div>
                <div>
                  <img src={images['codestat.jpg']} alt="" />
                </div>
              </HalfHalf>
            </AccordionItemBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemTitle>
              <img src={images['homesolutions-icon.svg']} alt="" />
              <div>
                <Title tag="h3" theme="subhead">HomeSolutions.Net</Title>
                <p>Comprehensive Home Healthcare Management System</p>
              </div>
            </AccordionItemTitle>

            <AccordionItemBody>
              <HalfHalf>
                <div>
                  <Title tag="p" theme="headline">Streamline the operational intricacies of delivering home healthcare.</Title>
                  <p>Improve the clinical, operational, financial, and regulatory performance of your home health organization. This cloud-based, agency management EMR solution provides comprehensive tools for mobile point-of-care documentation, revenue cycle management, and data dashboards for enhancing workflows and quality assurance. Move beyond error-prone paperwork to enhance processes for scheduling, coding, eligibility, visit reconciliation, and more.</p>
                  <Button>
                    <Link to="/homesolutions-net">More about Homesolutions.net</Link>
                  </Button>
                </div>
                <div>
                  <img src={images['homesolutions.jpg']} alt="" />
                </div>
              </HalfHalf>
            </AccordionItemBody>
          </AccordionItem>
        </Accordion>

        <Video
          isMobile={this.props.isMobile}
          url="https://vimeo.com/253985701"
          poster={images['video-poster.jpg']}
        >
          <div>
            <Title tag="h3" theme="context-head" color="scorpion">Video</Title>
            <Title tag="h2" theme="section-title">Data Solutions</Title>
            <p>Lorem ipsum dolor sit amet consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
          </div>
        </Video>

        <CTA />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isMobile: state.mobilestate.isMobile,
});

Homepage.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Homepage);
