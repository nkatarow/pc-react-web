import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Atoms
import Title, { TitleThemes } from '../../components/atoms/title/';
import Button from '../../components/atoms/button/';
import Picture from '../../components/atoms/picture/';

// Utilities
import getComponentImages from '../../_utility/getComponentImages';

// Moleules
import HalfHalf from '../../components/molecules/_layouts/HalfHalf/';
import Hero from '../../components/molecules/Hero/';
import Introduction from '../../components/molecules/Introduction/';
import ProductIntro from '../../components/molecules/ProductIntro/';
import Blockquote from '../../components/molecules/Blockquote/';
import MediaBlock from '../../components/molecules/MediaBlock/';
import CTA from '../../components/molecules/CTA/';

// Organisms
import MediaList, { MediaListTheme } from '../../components/organisms/MediaList/';

class Homesolutions extends PureComponent {
  componentDidMount() {
    document.title = 'HomeSolutions.net | Physio-Control';
    window.scrollTo(0, 0);
  }

  render() {
    const images = getComponentImages(require.context('./_img', false, /\.(png|jpe?g|svg)$/));

    return (
      <div>
        <Title tag="h1" theme={TitleThemes.HEADLINE} className="mobile-title">HomeSolutions.net<sup>®</sup></Title>
        <Hero
          isMobile={this.props.isMobile}
          mobileHero={images['Home-Solutions-Hero-mobile.jpg']}
          desktopHero={images['Home-Solutions-Hero-desktop.jpg']}
          headline="Powerful. Flexible. Accurate."
          copy="HomeSolutions.net® is a comprehensive cloud-based agency management EMR solution proven to help home health organizations improve clinical, operational, financial and regulatory performance."
        />

        <Introduction
          isMobile={this.props.isMobile}
          headline="Experience data-driven healthcare."
          copy="From admissions to scheduling, coding, orders, visit reconciliation, eligibility, billing, AR, HR and payroll preparation processes, HomeSolutions.net® can improve revenue cycle management performance and overall efficiency."
          smallCopy="With the web-based HomeSolutions.net® Manager, agencies can effectively manage workflow by moving away from paper-driven processes. For field staff, homecare agencies can choose between scannable forms, telephony or mobile device-based point-of-care methods, from nursing and therapy to paraprofessional disciplines."
        />

        <ProductIntro
          contextHead="Product Features"
          headline="HomeSolutions.net®"
          theme="gray"
          copy="HomeSolutions.net® can provide an immediate return on investment and is designed with a compliance-driven approach. Physio-Control has a successful track record of meeting regulatory deadlines with rich features and responsive, professional service and support."
          contextColor="affair"
        />

        <MediaList
          isMobile={this.props.isMobile}
          theme={MediaListTheme.GRAY}
        >
          <div>
            <Picture src={images['icon-touchscreen.svg']} alt="" />
            <Title tag="h3" theme="subhead">
              Easy-to-use<br />Touch-screen Interface
            </Title>
            <p>MobileTouch is the revolutionary Point-of-Care application that works online or offline on today’s popular tablets. This easy-to-use tool facilitates quick, timely documentation at the point-of-care, improving accuracy and patient care.</p>
          </div>
          <div>
            <Picture src={images['icon-dashboard.svg']} alt="" />
            <Title tag="h3" theme="subhead">
              Dashboard-Driven<br />Workflow
            </Title>
            <p>HomeSolutions Manager is the industry-leading data management solution for Home Health and Hospice. The configurable, dashboard-driven approach supports optimized workflow, Quality Assurance and Continuous Quality Improvement.</p>
          </div>
          <div>
            <Picture src={images['icon-revenue.svg']} alt="" />
            <Title tag="h3" theme="subhead">
              Accelerate All Phases of Your Revenue Cycle
            </Title>
            <p>RevNet<sup>®</sup> is a cloud-based revenue cycle management (RCM) solution that helps achieve highly efficient, compliant revenue performance by producing cleaner, quicker claims with less effort.</p>
          </div>
        </MediaList>

        <HalfHalf>
          <div>
            <Picture src={images['homesolutions-mobile.jpg']} />
          </div>
          <div>
            <Title tag="h2" theme="subhead">MobileTouch<sup>&trade;</sup></Title>
            <p>HomeSolutions MobileTouch is a finger-friendly point-of-care solution that combines the power and secure accessibility of cloud computing with the ease of use of a web browser. HomeSolutions MobileTouch is more than an “app,” and is designed to work on a wide variety of platforms including Android™, iOS™ and Windows® devices. HomeSolutions MobileTouch enables service documentation at the point-of-care without the heavy synchronization or persistent connection challenges typical of traditional point-of-care approaches.</p>
            <ul>
              <li>HTML5 Browser-based, iPad™-Optimized</li>
              <li>Online or Offline Capability</li>
              <li>Electronic Signature via Touch/Tablet</li>
              <li>Medications at the Point-of-Care</li>
              <li>Instant Response Validations and Error Checking</li>
              <li>HomeSoutions Mobile Chart with Key Information</li>
              <li>Scheduling Integration</li>
              <li>Comm Notes, myMessages, Alerts and Orders</li>
            </ul>
          </div>
        </HalfHalf>

        <HalfHalf layout="flip">
          <div>
            <Picture src={images['manager.jpg']} />
          </div>
          <div>
            <Title tag="h2" theme="subhead">HomeSolutions Manager</Title>
            <p>Move away from paper-driven processes and streamline operational workflow across your organization with HomeSolutions Manager. From Intake/Referral to scheduling, coding, orders, visit reconciliation, billing, AR, HR and payroll prep processes, HomeSolutions Manager can help make you more efficient.</p>
            <ul>
              <li>Intake/Referral Management with built-in PECOS status checks throughout</li>
              <li>Flexible role-based security with personalized dashboards and report views</li>
              <li>Real-time hospital readmission tracking, reporting and analysis</li>
              <li>Electronic charts with document manager</li>
              <li>Visual Visit Reconciliation, matching schedule to orders and authorizations to visits</li>
              <li>QA and validation checking throughout all processes</li>
              <li>Support for multiple business lines and multiple sites</li>
            </ul>
          </div>
        </HalfHalf>

        <HalfHalf>
          <div>
            <Picture src={images['homesolutions-revnet.jpg']} />
          </div>
          <div>
            <Title tag="h2" theme="subhead">RevNet<sup>®</sup></Title>
            <p>HomeSolutions RevNet<sup>®</sup> helps agencies improve their financial performance by automating much of the billing process and providing a continuous data stream – from data collection, to claims generation, to AR collection. Numerous integrated pre-billing checks will help your agency maximize your allowable revenue and stay in compliance with regulatory requirements.</p>
            <ul>
              <li>GL Builder creates validated GL code structure</li>
              <li>Electronic batch claim creation and payer level pre-billing checks</li>
              <li>Full AR management including ERAs, cash receipts and adjustments</li>
              <li>Month-end close process creates valid, static journal entries</li>
              <li>Gain real-time insight into agency financial performance</li>
              <li>Shorten DSO cycle and improve cash flow</li>
              <li>Identify revenue, aging, PPS performance and other key metrics</li>
              <li>RediPay™ handles TLM and payroll pre-processing</li>
            </ul>
          </div>
        </HalfHalf>

        <Blockquote
          isMobile={this.props.isMobile}
          mobileBackground={images['Home-Solutions-Blockquote-mobile.jpg']}
          desktopBackground={images['Home-Solutions-Blockquote-desktop.jpg']}
          quote="HomeSolutions.net® has been such a time saver for our company, decreasing administrative hours spent doing data entry and manual tracking. We can buzz through payroll, billing, and OASIS quicker than ever and I am impressed with all the reports and dashboards!"
          citeFirstLine="Sue Keenan RN"
          citeSecondLine="Director of Clinical Services"
          citeThirdLine="Comfort Care Medicare, Inc."
        />

        <MediaBlock image={images['service-support.svg']}>
          <Title tag="p" theme="context-head" color="selective-yellow">Service &amp; Support</Title>
          <Title tag="h2" theme="subhead">Dedicated to enabling your success</Title>
          <p>Delivering Software as a Service is our specialty, and we’re passionate about it. We believe that serving your business is both a privilege and a responsibility. We strive to provide you with software and services to help your organization improve clinical, operational, and financial performance.</p>
          <Link to="/professional-services">
            <Button>ABOUT PROFESSIONAL SERVICES</Button>
          </Link>
        </MediaBlock>

        <CTA linkUrl="/contact-us?referrer=homesolutions" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isMobile: state.mobilestate.isMobile,
});

Homesolutions.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Homesolutions);
