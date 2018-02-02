import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../atoms/title/';
import './style.css';

const Hero = (props) => {
  let heroImage = '';

  if (props.isMobile) {
    heroImage = props.mobileHero;
  } else {
    heroImage = props.desktopHero;
  }

  return (
    <section className="hero">
      <div className="hero-image">
        <img src={heroImage} alt="" />
      </div>
      <div className="hero-copy">
        <Title tag="h2" theme="hero-title">
          {props.headline}
        </Title>
        <p>{props.copy}</p>
      </div>
    </section>
  );
};

export default Hero;

Hero.defaultProps = {
  headline: 'Headline copy goes here',
  copy: 'Supporting copy for the hero headline goes here. It shouldn\'t be more than a paragraph long.',
};

Hero.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  mobileHero: PropTypes.string.isRequired,
  desktopHero: PropTypes.string.isRequired,
  headline: PropTypes.string,
  copy: PropTypes.string,
};
