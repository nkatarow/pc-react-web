import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Utilities
import getComponentImages from '../../_utility/getComponentImages';

// Atoms
import Title from '../../components/atoms/title/';
import Button from '../../components/atoms/button/';
import Picture from '../../components/atoms/picture/';

// Molecules
import HalfHalf from '../../components/molecules/_layouts/HalfHalf';
import Hero from '../../components/molecules/Hero/';
import Introduction from '../../components/molecules/Introduction/';
import Blockquote from '../../components/molecules/Blockquote/';
import ProductIntro from '../../components/molecules/ProductIntro/';
import MediaBlock from '../../components/molecules/MediaBlock/';
import CTA from '../../components/molecules/CTA/';

// Organisms
import MediaList, { MediaListTheme } from '../../components/organisms/MediaList/';

class Lifenet extends PureComponent {
  componentDidMount() {
    document.title = 'LIFENET System | Physio-Control';
    window.scrollTo(0, 0);
  }

  render() {
    const images = getComponentImages(require.context('./_img', false, /\.(png|jpe?g|svg)$/));

    return (
      <div>
        <Hero
          isMobile={this.props.isMobile}
          mobileHero={images['lifenet-hero-mobile.jpg']}
          desktopHero={images['lifenet-hero-desktop.jpg']}
          headline="Smoother communication. Faster care. Stronger teamwork."
          copy="The LIFENET® System is a comprehensive cloud-based platform that intelligently manages and delivers patient information and device data that EMS and hospital teams need to work together seamlessly, minimize time to treatment, and improve outcomes."
        />

        <Introduction
          isMobile={this.props.isMobile}
          headline="Take action with your data."
          copy="The LIFENET System manages and delivers patient and device data whenever and wherever it’s needed. Hospitals get advance notice of incoming critical patients. Care team members are activated in seconds to ensure patients receive timely care. Device readiness is tracked and managed effortlessly."
        />

        <HalfHalf>
          <div>
            <Picture src={images['stemi-stroke.jpg']} />
          </div>
          <div>
            <Title tag="h3" theme="subhead">Minimize Time to Treatment for STEMI, Stroke, and other emergencies</Title>
            <p>Faster response times lead to better outcomes. Give hospital critical care teams a head start on reducing time to treatment for all emergencies through comprehensive patient data delivery from EMS. Hospitals know exactly what to expect before patients reach their doors, which means care teams can be assembled faster and briefed in advance.</p>
          </div>
        </HalfHalf>

        <HalfHalf layout="flip">
          <div>
            <Picture src={images['decisions-collaboration.jpg']} />
          </div>
          <div>
            <Title tag="h3" theme="subhead">Enable Quicker Decisions and Team Collaboration</Title>
            <p>No matter where a physician might be located, their advice is only a click away with LIFENET Consult. This smartphone application allows clinicians to quickly perform remote consultations and decision support, while securely messaging the team coordinator.</p>
          </div>
        </HalfHalf>

        <HalfHalf>
          <div>
            <Picture src={images['improvement.jpg']} />
          </div>
          <div>
            <Title tag="h3" theme="subhead">Quickly Mobilize Data for Reporting and Quality Improvement</Title>
            <p>In addition to capturing minute-by-minute transmission/reception history, LIFENET facilitates the immediate transfer of data to CODE-STAT™ Data Review Software and ePCR solutions for efficient post-event QA/QI.</p>
          </div>
        </HalfHalf>

        <HalfHalf layout="flip">
          <div>
            <Picture src={images['manage-equipment.jpg']} />
          </div>
          <div>
            <Title tag="h3" theme="subhead">Easily Manage Equipment</Title>
            <p>LIFENET Asset allows you to manage an entire fleet of devices from one place. This web-based tool allows you to track equipment readiness, manage setup options, update software and receive notifications about potential device issues. Asset is highly configurable with automated alerting capabilities.</p>
          </div>
        </HalfHalf>

        <HalfHalf>
          <div>
            <Picture src={images['patient-privacy.jpg']} />
          </div>
          <div>
            <Title tag="h3" theme="subhead">Protect Patient Privacy</Title>
            <p>LIFENET offers multiple security shields and audits to help hospitals and EMS teams protect patient health information and avoid HIPAA exposure.</p>
          </div>
        </HalfHalf>

        <HalfHalf layout="flip">
          <div>
            <Picture src={images['proven-system.jpg']} />
          </div>
          <div>
            <Title tag="h3" theme="subhead">Trust a Proven System</Title>
            <p>LIFENET is backed by a leader in emergency medicine and resuscitation, providing the most comprehensive toolset for team coordination, alerting, data transmission, and device fleet management for multiple devices.</p>
          </div>
        </HalfHalf>

        <Blockquote
          isMobile={this.props.isMobile}
          mobileBackground={images['quote-bg-mobile.jpg']}
          desktopBackground={images['quote-bg-desktop.jpg']}
          quote="LIFENET is the backbone for navigation and early activation of all our time-critical medical patients. It creates great outcomes."
          citeFirstLine="Dan Ellenberger"
          citeSecondLine="Director EMS Institute"
          citeThirdLine="University Hospitals, Cleveland, OH"
        />

        <ProductIntro
          contextHead="Product Features"
          headline="The LIFENET System"
          theme="gray"
          contextColor="affair"
        />

        <MediaList
          isMobile={this.props.isMobile}
          theme={MediaListTheme.GRAY}
        >
          <div>
            <Picture src={images['icon-alert.svg']} alt="" />
            <Title tag="h3" theme="subhead">
            Alert
            </Title>
            <p>Never miss a notification again. Receive highly visible pre-arrival notifications and urgent patient information to facilitate transfer to definitive care.</p>
          </div>
          <div>
            <Picture src={images['icon-consult.svg']} alt="" />
            <Title tag="h3" theme="subhead">
            Consult
            </Title>
            <p>Allow remote consultations and decision support through mobile devices, accelerating response to emergent patient data and increasing clinical efficiency.</p>
          </div>
          <div>
            <Picture src={images['icon-onepush.svg']} alt="" />
            <Title tag="h3" theme="subhead">
            OnePush
            </Title>
            <p>Automatically activate protocols for many emergent care needs, alert care teams to incoming patients, and timestamp specified events. All of this can be initiated by prehospital EMS transmission.</p>
          </div>
          <div>
            <Picture src={images['icon-connect.svg']} alt="" />
            <Title tag="h3" theme="subhead">
            Connect
            </Title>
            <p>Send patient care data directly to CODE-STAT™ Data Review Software or your ePCR directly from the LIFEPAK device through the same gateway used to transmit 12-lead ECGs.</p>
          </div>
          <div>
            <Picture src={images['icon-adapter.svg']} alt="" />
            <Title tag="h3" theme="subhead">
            Adapter
            </Title>
            <p>Ensure all 12-lead ECG alerts, even from different branded monitors, are easily visible on one interface.</p>
          </div>
          <div>
            <Picture src={images['icon-export.svg']} alt="" />
            <Title tag="h3" theme="subhead">
            Export
            </Title>
            <p>Provide a simple way to send 12-lead ECG data to a hospital’s electronic record system, such as GE MUSE®, for integration into the patient record.</p>
          </div>
          <div>
            <Picture src={images['icon-asset.svg']} alt="" />
            <Title tag="h3" theme="subhead">
            Asset
            </Title>
            <p>Manage equipment status and service needs while coordinating configurations across all your equipment.</p>
          </div>
        </MediaList>

        <MediaBlock image={images['service-support.svg']}>
          <Title tag="p" theme="context-head" color="selective-yellow">Service &amp; Support</Title>
          <Title tag="h2" theme="subhead">Complete Service by Stryker SmartDesk</Title>
          <p>Supported by the Stryker SmartDesk, LIFENET will integrate seamlessly with even the most complex hospital or EMS system.</p>
          <Button>
            <Link to="/professional-services">Professional Services</Link>
          </Button>
        </MediaBlock>

        <CTA />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isMobile: state.mobilestate.isMobile,
});

Lifenet.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Lifenet);
