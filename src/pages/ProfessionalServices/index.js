import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Utilities
import getComponentImages from '../../_utility/getComponentImages';

// Atoms
import Title, { TitleThemes } from '../../components/atoms/title/';
import Picture from '../../components/atoms/picture/';

// Molecules
import Hero from '../../components/molecules/Hero/';
import Introduction from '../../components/molecules/Introduction/';
import ProductIntro from '../../components/molecules/ProductIntro/';
import HalfHalf from '../../components/molecules/_layouts/HalfHalf/';
import CTA from '../../components/molecules/CTA/';

// Organisms
import MediaList, { MediaListTheme } from '../../components/organisms/MediaList/';


class ProfessionalServices extends PureComponent {
  componentDidMount() {
    document.title = 'Professional Services | Physio-Control';
    window.scrollTo(0, 0);
  }

  render() {
    const images = getComponentImages(require.context('./_img', false, /\.(png|jpe?g|svg)$/));

    return (
      <div className="professional-services-page">
        <Title tag="h1" theme={TitleThemes.HEADLINE} className="mobile-title">Professional Services</Title>
        <Hero
          isMobile={this.props.isMobile}
          preloadImage={images['proservices-hero-preload.jpg']}
          mobileHero={images['proservices-hero-mobile.jpg']}
          desktopHero={images['proservices-hero-desktop.jpg']}
          headline="Quickly and easily put data solutions to work."
          copy="Speed deployment and develop more comfortable users. They’ll obtain insights more quickly so you can start improving and making the most of your healthcare software investment."
        />

        <Introduction
          isMobile={this.props.isMobile}
          headline="Our experience and expertise help ensure your success."
          copy="From easy-access, self-managed training to dedicated project managers who can walk you through the whole start-up process and beyond, personalized support from our Professional Services team can help deliver a fast, smooth implementation—no matter how large your organization."
        />

        <ProductIntro
          contextHead="Benefits"
          headline="Why Professional Services?"
          copy="Save time and harness maximum power from LIFENET, CODE-STAT, or HealthEMS. Rely on Professional Services support for tailoring your solution, integrating it with current systems and processes, training users, and optimizing features."
          theme="gray"
          contextColor="affair"
        />

        <MediaList
          isMobile={this.props.isMobile}
          theme={MediaListTheme.GRAY}
        >
          <div>
            <Picture src={images['customize-solution.svg']} alt="" />
            <Title tag="h3" theme="subhead">
              Customize the Solution to Meet Your Unique Needs
            </Title>
            <p>Work with our experts to identify the features or modules that will deliver the information and functions you need.</p>
          </div>
          <div>
            <Picture src={images['software-implementation.svg']} alt="" />
            <Title tag="h3" theme="subhead">
              Make Software Implementation Faster and Easier
            </Title>
            <p>Simplify deployment and start using your system quickly, without business disruption.</p>
          </div>
          <div>
            <Picture src={images['data-reports.svg']} alt="" />
            <Title tag="h3" theme="subhead">
              Get Exactly the Data and Reports You Need
            </Title>
            <p>Improve performance right away when you can rapidly access the insights that matter without irrelevant detail or manual analysis.</p>
          </div>
          <div>
            <Picture src={images['learn-efficiently.svg']} alt="" />
            <Title tag="h3" theme="subhead">
              Learn Efficiently, at Your Own Convenience
            </Title>
            <p>Get your team up to speed fast with training options that work for your circumstances.</p>
          </div>
        </MediaList>

        <HalfHalf>
          <div>
            <Picture src={images['proservices-get-help.jpg']} />
          </div>
          <div>
            <Title tag="h3" theme="subhead">Get Help When, Where, and As You Need</Title>
            <ul>
              <li>Draw on various support options before, during, and/or after you begin using your new solutions.</li>
              <li>Reduce workloads on internal technical resources and free them for more valuable use of their time.</li>
              <li>Choose from self-guided online training and support or custom, onsite options that quickly deliver self-sufficient users.</li>
              <li>Rely on a specialized technical support team to address user questions or technical concerns to improve system optimization.</li>
            </ul>
          </div>
        </HalfHalf>

        <HalfHalf layout="flip">
          <div>
            <Picture src={images['proservices-confidence.jpg']} />
          </div>
          <div>
            <Title tag="h3" theme="subhead">Develop Team Confidence and Competence Faster</Title>
            <ul>
              <li>Follow easy, step-by-step implementation processes and critical-path timelines.</li>
              <li>Take advantage of proven procedures and tools that can be tailored to your situation.</li>
              <li>Use our proven train-the-trainer approach to develop internal experts and provide comprehensive education to super-users, managers, and anyone who enters data.</li>
              <li>Make the most of your investment with a well-planned, prompt, and complete implementation by our experienced team using standard project management methodology.</li>
            </ul>
          </div>
        </HalfHalf>

        <HalfHalf>
          <div>
            <Picture src={images['proservices-smooth-interaction.jpg']} />
          </div>
          <div>
            <Title tag="h3" theme="subhead">Ensure Smooth Interaction with Other Systems and Processes</Title>
            <ul>
              <li>Rely on a dedicated project manager, who works with you to understand your entire operation and then configure interfaces, educate users, and make your new solution a time-saving, trusted part of their work.</li>
              <li>For your ePCR, automate or streamline data interfaces with CAD, billing, and third-party agency systems, defibrillation devices, organizational recordkeeping, and regulatory agencies.</li>
            </ul>
          </div>
        </HalfHalf>

        <CTA />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isMobile: state.mobilestate.isMobile,
});

ProfessionalServices.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(ProfessionalServices);
