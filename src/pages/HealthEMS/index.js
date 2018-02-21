import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './style.css';

// Utilities
import getComponentImages from '../../_utility/getComponentImages';

// Atoms
import Title from '../../components/atoms/title/';
import Button from '../../components/atoms/button/';
import Picture from '../../components/atoms/picture/';

// Molecules
import Hero from '../../components/molecules/Hero/';
import Introduction from '../../components/molecules/Introduction/';
import ProductIntro from '../../components/molecules/ProductIntro/';
import HalfHalf from '../../components/molecules/_layouts/HalfHalf/';
import Blockquote from '../../components/molecules/Blockquote/';
import MediaBlock from '../../components/molecules/MediaBlock/';
import CTA from '../../components/molecules/CTA/';

// Organisms
import MediaList, { MediaListTheme } from '../../components/organisms/MediaList/';

class HealthEMS extends PureComponent {
  componentDidMount() {
    document.title = 'Health EMS | Physio-Control';
    window.scrollTo(0, 0);
  }

  render() {
    const images = getComponentImages(require.context('./_img', false, /\.(png|jpe?g|svg)$/));

    return (
      <div className="healthems-page">
        <Hero
          isMobile={this.props.isMobile}
          mobileHero={images['healthems-hero-mobile.jpg']}
          desktopHero={images['healthems-hero-desktop.jpg']}
          headline="Quickly access the information to optimize performance."
          copy="Easy, customizable documentation with advanced reporting can help you to improve patient care and service delivery."
        />

        <Introduction
          isMobile={this.props.isMobile}
          headline="Easy. Powerful. Accurate."
          copy="Your dynamic work environment demands speed and flexibility, and the HealthEMS electronic patient care record (ePCR) provides both."
          smallCopy="Make operations and documentation easier and more efficient with this patient-based, protocol-driven ePCR that helps you easily receive, share, and find actionable data. This flexible solution can be customized to match your needs, from smooth CAD integration to accurate billing and reporting."
        />

        <Picture src={images['healthems-landscape.jpg']} alt="Alt Text" />

        <ProductIntro
          contextHead="Product Highlights"
          headline="Simplify documentation to improve care and your operations"
          copy="An intuitive, user-friendly interface combines with powerful processing capabilities and cloud-based connectivity to help you improve patient care, regulatory compliance, and operational and financial performance."
          theme="gray"
          contextColor="affair"
        />

        <MediaList
          isMobile={this.props.isMobile}
          theme={MediaListTheme.GRAY}
        >
          <div>
            <Picture src={images['docs-icon.svg']} alt="" />
            <Title tag="h3" theme="subhead">
            Quality documentation for how you work
            </Title>
            <p>Capture data from multiple sources to easily document activity at the point of care — based on input from CAD, monitors, and more — all according to your protocols.</p>
          </div>

          <div>
            <Picture src={images['operational-effectiveness-icon.svg']} alt="" />
            <Title tag="h3" theme="subhead">
            Greater operational effectiveness
            </Title>
            <p>Quickly satisfy all reporting and compliance requirements of hospitals and regulatory authorities. HealthEMS tracks patient and incident data and can work with or replace your existing billing system.</p>
          </div>

          <div>
            <Picture src={images['flexible-data-icon.svg']} alt="" />
            <Title tag="h3" theme="subhead">
            Powerful data made flexible
            </Title>
            <p>Rely on a connected system to more easily access and share actionable data that can make a difference in patient care, quality assurance, and the achievement of your operational goals.</p>
          </div>

          <div>
            <Picture src={images['reliable-icon.svg']} alt="" />
            <Title tag="h3" theme="subhead">
            Reliable and proven partner
            </Title>
            <p>Rely on the expertise and easy-access support of a leader in emergency medicine and resuscitation.</p>
          </div>
        </MediaList>

        <ProductIntro
          headline="HealthEMS ePCR Solution"
          copy="Choose the functionality and components that match the needs of your teams, whether fire-only, EMS-only, or fire/EMS responders."
        />

        <HalfHalf>
          <div>
            <Picture src={images['mobiletouch.jpg']} />
          </div>
          <div>
            <Title tag="h3" theme="subhead">MobileTouch</Title>
            <p className="medium">Quality documentation with less effort</p>
            <p>Save time and prevent errors when you can record easily and in a flow that makes sense with your protocols. The MobileTouch electronic patient care report (ePCR) application works securely on today’s popular tablets—online or offline. Its quick, touch-based operation facilitates quick, immediate documentation, right at the point of care.</p>
            <ul>
              <li>Dynamic, protocol-driven flow</li>
              <li>Data capture from multiple sources, from monitors to scanned driver’s licenses</li>
              <li>Auto-filling of critical fields, enabled by CAD, monitor integration, and patient {"ID's"}</li>
              <li>Assessments, vitals, and interventions, all in one place</li>
              <li>Closed-call rules with conditional validations</li>
            </ul>
          </div>
        </HalfHalf>

        <HalfHalf layout="flip">
          <div>
            <Picture src={images['healthems-manager.jpg']} />
          </div>
          <div>
            <Title tag="h3" theme="subhead">HealthEMS Manager</Title>
            <p className="medium">Better visibility for managing your operations</p>
            <p>Empower great teams to excel even more when you can easily assess performance and plan targeted enhancements. HealthEMS Manager is the ePCR command center for agency administrators. Personalized dashboards provide real-time metrics to support performance management and training, workflow optimization, and quality assurance / quality improvement (QA/QI) activities.</p>
            <ul>
              <li>High level of configurability</li>
              <li>Secure, automatic QA alerting for custom-set events</li>
              <li>Standard and tailored reports</li>
              <li>A proprietary algorithm that analyzes patient reports to ensure accurate billing and CMS compliance</li>
              <li>Real-time CAD, patient, incident, monitor / ECG, and billing data in one record set</li>
              <li>Flexible, role-based security</li>
            </ul>
          </div>
        </HalfHalf>

        <HalfHalf>
          <div>
            <Picture src={images['connectx.jpg']} />
          </div>
          <div>
            <Title tag="h3" theme="subhead">ConnectX</Title>
            <p className="medium">Faster, easier collaboration</p>
            <p>You’re one crucial link in a lifesaving system that depends on shared information and close collaboration. HealthEMS Connectx enables fire/EMS organizations to securely connect to the broader healthcare ecosystem, from hospitals to regulatory authorities, to improve patient care and reduce healthcare costs.</p>
            <ul>
              <li>Flexible, fast cloud interconnection</li>
              <li>Structured, standardized data sets and exchanges</li>
              <li>Automated or on-demand integrations with third-party systems and data repositories</li>
              <li>HIPAA-compliant data integration</li>
            </ul>
          </div>
        </HalfHalf>

        <HalfHalf layout="flip">
          <div>
            <Picture src={images['healthems-fire.jpg']} />
          </div>
          <div>
            <Title tag="h3" theme="subhead">HealthEMS Fire</Title>
            <p className="medium">One solution for fire and EMS</p>
            <p>Combined EMS and fire duties increase your management challenges. HealthEMS Fire software coordinates and streamlines your data and reporting so you can seamlessly track, document, and correlate incident and ePCR data in one NFIRS-5-compatible records management system (RMS).</p>
            <ul>
              <li>Centralized records and intelligent matching between fire incidents and ePCRs</li>
              <li>Electronic tracking for routine inspections and investigations</li>
              <li>CAD, roster, and hydrant map integration</li>
              <li>Auto-filling of fields and dynamic NFIRS code suggestions</li>
            </ul>
          </div>
        </HalfHalf>

        <HalfHalf>
          <div>
            <Picture src={images['revnet.jpg']} />
          </div>
          <div>
            <Title tag="h3" theme="subhead">RevNet</Title>
            <p className="medium">An accelerated revenue cycle</p>
            <p>Focus your attention on what matters rather than administrative workloads. RevNet is a cloud-based revenue cycle management (RCM) solution for improving revenue performance and reducing collection efforts. Produce cleaner, quicker claims with less effort and more accountability.</p>
            <ul>
              <li>Intelligent patient matching and integrated eligibility to maximize revenue on first pass</li>
              <li>Electronic remittance advice (ERA) posting and one-click balance forwarding</li>
              <li>Scalable pricing model with options for agencies of any size</li>
              <li>Auto-calculated necessity scores and service levels for more accurate billing and less audit risk</li>
            </ul>
          </div>
        </HalfHalf>

        <Blockquote
          isMobile={this.props.isMobile}
          mobileBackground={images['quote-bg-mobile.jpg']}
          desktopBackground={images['quote-bg-desktop.jpg']}
          quote="HealthEMS supports how we function, how we work. With MobileTouch and HealthEMS Manager we can easily enter the pertinent data we need to justify the treatment provided and get quick QI information on our calls."
          citeFirstLine="Derek Parker"
          citeSecondLine="Captain"
          citeThirdLine="Sacramento Fire Department"
        />

        <MediaBlock image={images['service-support.svg']}>
          <Title tag="p" theme="context-head" color="selective-yellow">Service &amp; Support</Title>
          <Title tag="h2" theme="subhead">Make it <em>your</em> ePCR</Title>
          <p>You need solutions that work right, quickly, and under pressure — just like you do. An expert support team will help you tailor your HealthEMS solution with all the components you need for success. Full training and support will speed implementation to put data and new insights at your fingertips while enabling your organization to continue operations.</p>
          <Link to="/professional-services">
            <Button>ABOUT PROFESSIONAL SERVICES</Button>
          </Link>
        </MediaBlock>

        <CTA />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  isMobile: state.mobilestate.isMobile,
});

HealthEMS.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(HealthEMS);
