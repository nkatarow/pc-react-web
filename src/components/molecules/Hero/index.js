import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Title from '../../atoms/title/';
import IronImage from '../../atoms/IronImage/';
import './style.css';

const Hero = (props) => {
  let hdUrl = '';

  if (props.screenWidth <= 940) {
    hdUrl = props.mobileHero;
  } else {
    hdUrl = props.desktopHero;
  }

  return (
    <section className="hero">
      <div className="hero-image">
        <IronImage srcPreload={props.preloadImage} srcLoaded={hdUrl} alt="" />
      </div>
      <div className="hero-copy">
        <Title tag="h2" theme="hero-title" color={props.headlineColor}>
          {props.headline}
        </Title>
        {props.copy &&
          <p className="medium">{props.copy}</p>
        }
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  screenWidth: state.screensize.dimensions.width,
});

Hero.defaultProps = {
  preloadImage: './_img/preload.jpg',
  headline: 'Headline copy goes here',
  headlineColor: 'black',
  copy: null,
};

Hero.propTypes = {
  screenWidth: PropTypes.number.isRequired,
  mobileHero: PropTypes.string.isRequired,
  desktopHero: PropTypes.string.isRequired,
  preloadImage: PropTypes.string,
  headline: PropTypes.string,
  headlineColor: PropTypes.string,
  copy: PropTypes.string,
};

export default connect(mapStateToProps)(Hero);
