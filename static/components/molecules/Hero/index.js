import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Title from '../../atoms/title/';
import './style.css';

const Hero = (props) => {
  let heroImage = '';

  if (props.screenWidth <= 940) {
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
  headline: 'Headline copy goes here',
  headlineColor: 'black',
  copy: null,
};

Hero.propTypes = {
  screenWidth: PropTypes.number.isRequired,
  mobileHero: PropTypes.string.isRequired,
  desktopHero: PropTypes.string.isRequired,
  headline: PropTypes.string,
  headlineColor: PropTypes.string,
  copy: PropTypes.string,
};

export default connect(mapStateToProps)(Hero);
