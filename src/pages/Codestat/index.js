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
import HalfHalf from '../../components/molecules/_layouts/HalfHalf/';
import Hero from '../../components/molecules/Hero/';
import ProductIntro from '../../components/molecules/ProductIntro/';
import MediaBlock, { MediaBlockSize, MediaBlockTheme } from '../../components/molecules/MediaBlock/';
import CTA from '../../components/molecules/CTA/';

// Organisms
import MediaList, { MediaListTheme } from '../../components/organisms/MediaList/';

class Codestat extends PureComponent {
  componentDidMount() {
    document.title = 'CodeStat | Physio-Control';
    window.scrollTo(0, 0);
  }

  render() {
    const images = getComponentImages(require.context('./_img', false, /\.(png|jpe?g|svg)$/));
    return (
      <div className="codestat-page">
        <Hero
          isMobile={this.props.isMobile}
          mobileHero={images['codestat-hero-mobile.jpg']}
          desktopHero={images['codestat-hero-desktop.jpg']}
          headline="Insights to Improve Performance and Patient Outcomes"
          copy="Turn your passion for saving lives into targeted improvements — CODE-STAT Data Review Software lets you easily understand team performance immediately after response."
        />

        <Picture src={images['codestat-landscape.jpg']} alt="Alt Text" />

        <ProductIntro
          contextHead="Product Highlights"
          headline="Better data means better CPR"
          copy="CODE-STAT software makes it easy to see and correlate key CPR performance metrics while the incident is still fresh. Spot at a glance where you need to improve — or gain confidence in your team’s operations and skills. Measure, review, report, and repeat."
          theme="gray"
          contextColor="affair"
        />

        <MediaList
          isMobile={this.props.isMobile}
          theme={MediaListTheme.GRAY}
        >
          <div>
            <Picture src={images['icon-bettercare.svg']} alt="" />
            <Title tag="h3" theme="subhead">
              Deliver Better Care
            </Title>
            <p>Respond more effectively for better outcomes with easier access to complete event data.</p>
          </div>
          <div>
            <Picture src={images['icon-trainefficiently.svg']} alt="" />
            <Title tag="h3" theme="subhead">
              Train More Efficiently
            </Title>
            <p>Focus training and performance management where it’s needed most.</p>
          </div>
          <div>
            <Picture src={images['icon-fastereasier.svg']} alt="" />
            <Title tag="h3" theme="subhead">
              Make Improvement Faster and Easier
            </Title>
            <p>Simplify the collection, analysis, and sharing of data that can power performance reviews and enhancement.</p>
          </div>
          <div>
            <Picture src={images['icon-data.svg']} alt="" />
            <Title tag="h3" theme="subhead">
              Save Time on Data Collection and Reporting
            </Title>
            <p>Collect information automatically and customize required reports and documentation.</p>
          </div>
        </MediaList>

        <ProductIntro
          contextHead="Product Features"
          headline="CODE-STAT"
          copy="Accelerate your QA/QI efforts with insights revealed through comprehensive CODE-STAT analysis. AHA Consensus Statement recommendations on CPR quality suggest maintaining “continuous quality improvement on provider, team, and system levels.” CODE-STAT software gives you quick access to relevant high-quality data—including compression hands-on time, rate, longest pauses, and time elapsed before first shock."
          contextColor="affair"
        />

        <HalfHalf>
          <div>
            <Picture src={images['resuscitation.jpg']} />
          </div>
          <div>
            <Title tag="h3" theme="subhead">See Resuscitation Performance at a Glance</Title>
            <ul>
              <li>Display CPR metrics visually, according to your targets, for intuitive insight. Dive into moment-by-moment details of an entire event on a graphic, continuous time scale.</li>
              <li>Review interval statistics for the entire resuscitation, broken down by time interval.</li>
            </ul>
          </div>
        </HalfHalf>

        <HalfHalf layout="flip">
          <div>
            <Picture src={images['custom-analytics.jpg']} />
          </div>
          <div>
            <Title tag="h3" theme="subhead">Create Custom Analytics and Reporting According to Your Needs</Title>
            <ul>
              <li>Customize display of the statistics and details you need most, including CPR performance, ECG and EtCO2 waveforms, and CO2 trend data.</li>
              <li>Annotate the stories of each resuscitation event to add context or focus attention on achievements or areas needing improvement.</li>
              <li>Create individual or summary reports.</li>
            </ul>
          </div>
        </HalfHalf>

        <HalfHalf>
          <div>
            <Picture src={images['streamline-reporting.jpg']} />
          </div>
          <div>
            <Title tag="h3" theme="subhead">Streamline Reporting</Title>
            <ul>
              <li>Easily create summary, detail, or custom reports for performance reviews, training plans, or documentation.</li>
              <li>Provide feedback to caregivers in a simple, intuitive format.</li>
              <li>Track performance improvement and trends over time.</li>
            </ul>
          </div>
        </HalfHalf>

        <HalfHalf layout="flip">
          <div>
            <Picture src={images['data-handling.jpg']} />
          </div>
          <div>
            <Title tag="h3" theme="subhead">Reduce Data Handling Effort</Title>
            <ul>
              <li>Simplify data collection and management, thanks to full integration with all LIFEPAK monitor/defibrillators.</li>
              <li>No time or staff for review? Receive expert summaries and targeted recommendations on request with Physio-Control’s new CODE-STAT Data Review Service.</li>
            </ul>
          </div>
        </HalfHalf>

        <MediaBlock
          isMobile={this.props.isMobile}
          size={MediaBlockSize.LARGE}
          theme={MediaBlockTheme.IMAGE}
          image={images['25-percent-compressions.svg']}
          bgMobile={images['bg-compression-mobile.jpg']}
          bgDesktop={images['bg-compression-desktop.jpg']}
        >
          <Title tag="h2" theme="section-title" color="selective-yellow">Speed Clinically-Significant Improvements</Title>
          <p className="large">Hands-on compression ratio relates directly to patient outcomes, which is why Redmond Medic One set out to increase this performance metric using CODE-STAT software. In just six months, the team increased its compression ratio from 66% to 83% — a 25% improvement. Research shows clinically significant improvement takes place after the kind of targeted performance reviews you can hold when you learn from every resuscitation with CODE-STAT.</p>
          <p>Olasveengen footnote lorem ipsum dolor sit amet consequat duis autem.</p>
        </MediaBlock>

        <MediaBlock image={images['service-support.svg']}>
          <Title tag="p" theme="context-head" color="selective-yellow">Service &amp; Support</Title>
          <Title tag="h2" theme="subhead">Complete Service by Stryker SmartDesk</Title>
          <p>Start gaining insight immediately with smooth, easy CODE-STAT implementation. An expert Physio-Control team guides you with tutorials, traning, and assistance through our Smart Desk support.</p>
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

Codestat.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Codestat);
