import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Utilities
import getComponentImages from '../../_utility/getComponentImages';

// Atoms
import Title from '../../atoms/title/';
import Button from '../../atoms/button/';
import Picture from '../../atoms/picture/';

// Molecules
import HalfHalf from '../../molecules/_layouts/HalfHalf';
import Hero from '../../molecules/Hero/';
import Introduction from '../../molecules/Introduction/';
import Blockquote from '../../molecules/Blockquote/';
import ProductIntro from '../../molecules/ProductIntro/';
import MediaBlock from '../../molecules/MediaBlock/';
import CTA from '../../molecules/CTA/';

// Organisms
import MediaList, { MediaListTheme } from '../../organisms/MediaList/';

class Lifenet extends PureComponent {
  componentDidMount() {
    document.title = 'LIFENET System | Physio-Control';
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
            <Title tag="h3" theme="subhead">MobileTouch</Title>
            <p className="medium">Quality documentation with less effort</p>
            <p>Save time and prevent errors when you can record easily and in a flow that makes sense with your protocols. The MobileTouch electronic patient care report (ePCR) application works securely on today’s popular tablets—online or offline. Its quick, touch-based operation facilitates quick, immediate documentation, right at the point of care.</p>
            <ul>
              <li>Dynamic, protocol-driven flow</li>
              <li>Data capture from multiple sources, from monitors to scanned driver’s licenses</li>
              <li>Auto-filling of critical fields, from CAD and monitors to patient history and IDs</li>
              <li>Assessments, vitals, and interventions, all in one place</li>
              <li>Close-call rules with conditional validations</li>
            </ul>
          </div>
        </HalfHalf>

        <HalfHalf layout="flip">
          <div>
            <Picture src={images['decisions-collaboration.jpg']} />
          </div>
          <div>
            <Title tag="h3" theme="subhead">HealthEMS Manager</Title>
            <p className="medium">Better visibility for managing your operations</p>
            <p>Empower great teams to excel even more when you can easily assess performance and plan targeted enhancements. HealthEMS Manager is the ePCR command center for agency administrators. Personalized dashboards provide real-time metrics to support performance management and training, workflow optimization, and quality assurance / quality improvement (QA/QI) activities.</p>
            <ul>
              <li>Greater configurability than any other ePCR</li>
              <li>Secure, automatic alerting for custom-set events</li>
              <li>Standard and tailored reports</li>
              <li>A proprietary algorithm that analyzes patient reports to ensure accurate billing and CMS compliance</li>
              <li>Real-time CAD, patient, incident, monitor / ECG, and billing data in one record set</li>
              <li>Flexible, role-based security</li>
            </ul>
          </div>
        </HalfHalf>

        <HalfHalf>
          <div>
            <Picture src={images['improvement.jpg']} />
          </div>
          <div>
            <Title tag="h3" theme="subhead">MobileTouch</Title>
            <p className="medium">Quality documentation with less effort</p>
            <p>Save time and prevent errors when you can record easily and in a flow that makes sense with your protocols. The MobileTouch electronic patient care report (ePCR) application works securely on today’s popular tablets—online or offline. Its quick, touch-based operation facilitates quick, immediate documentation, right at the point of care.</p>
            <ul>
              <li>Dynamic, protocol-driven flow</li>
              <li>Data capture from multiple sources, from monitors to scanned driver’s licenses</li>
              <li>Auto-filling of critical fields, from CAD and monitors to patient history and IDs</li>
              <li>Assessments, vitals, and interventions, all in one place</li>
              <li>Close-call rules with conditional validations</li>
            </ul>
          </div>
        </HalfHalf>

        <HalfHalf layout="flip">
          <div>
            <Picture src={images['manage-equipment.jpg']} />
          </div>
          <div>
            <Title tag="h3" theme="subhead">HealthEMS Manager</Title>
            <p className="medium">Better visibility for managing your operations</p>
            <p>Empower great teams to excel even more when you can easily assess performance and plan targeted enhancements. HealthEMS Manager is the ePCR command center for agency administrators. Personalized dashboards provide real-time metrics to support performance management and training, workflow optimization, and quality assurance / quality improvement (QA/QI) activities.</p>
            <ul>
              <li>Greater configurability than any other ePCR</li>
              <li>Secure, automatic alerting for custom-set events</li>
              <li>Standard and tailored reports</li>
              <li>A proprietary algorithm that analyzes patient reports to ensure accurate billing and CMS compliance</li>
              <li>Real-time CAD, patient, incident, monitor / ECG, and billing data in one record set</li>
              <li>Flexible, role-based security</li>
            </ul>
          </div>
        </HalfHalf>

        <HalfHalf>
          <div>
            <Picture src={images['patient-privacy.jpg']} />
          </div>
          <div>
            <Title tag="h3" theme="subhead">MobileTouch</Title>
            <p className="medium">Quality documentation with less effort</p>
            <p>Save time and prevent errors when you can record easily and in a flow that makes sense with your protocols. The MobileTouch electronic patient care report (ePCR) application works securely on today’s popular tablets—online or offline. Its quick, touch-based operation facilitates quick, immediate documentation, right at the point of care.</p>
            <ul>
              <li>Dynamic, protocol-driven flow</li>
              <li>Data capture from multiple sources, from monitors to scanned driver’s licenses</li>
              <li>Auto-filling of critical fields, from CAD and monitors to patient history and IDs</li>
              <li>Assessments, vitals, and interventions, all in one place</li>
              <li>Close-call rules with conditional validations</li>
            </ul>
          </div>
        </HalfHalf>

        <HalfHalf layout="flip">
          <div>
            <Picture src={images['proven-system.jpg']} />
          </div>
          <div>
            <Title tag="h3" theme="subhead">HealthEMS Manager</Title>
            <p className="medium">Better visibility for managing your operations</p>
            <p>Empower great teams to excel even more when you can easily assess performance and plan targeted enhancements. HealthEMS Manager is the ePCR command center for agency administrators. Personalized dashboards provide real-time metrics to support performance management and training, workflow optimization, and quality assurance / quality improvement (QA/QI) activities.</p>
            <ul>
              <li>Greater configurability than any other ePCR</li>
              <li>Secure, automatic alerting for custom-set events</li>
              <li>Standard and tailored reports</li>
              <li>A proprietary algorithm that analyzes patient reports to ensure accurate billing and CMS compliance</li>
              <li>Real-time CAD, patient, incident, monitor / ECG, and billing data in one record set</li>
              <li>Flexible, role-based security</li>
            </ul>
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
          <Button>About Service Plans</Button>
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
