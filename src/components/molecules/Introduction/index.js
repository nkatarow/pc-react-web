import React from 'react';
import PropTypes from 'prop-types';

import Title from '../../atoms/title/';

import './style.css';

const Introduction = (props) => {
  let introImage = null;
  let copyClass = 'copy';
  let imageBlock = (<div className="noise" />);

  if (props.isMobile) {
    introImage = props.introMobileImage;
  } else {
    introImage = props.introDesktopImage;
  }

  if (introImage) {
    copyClass = 'copy with-image';
    imageBlock = (
      <div className="image">
        <div className="noise" />
        <img src={introImage} alt="" />
      </div>
    );
  }

  return (
    <section className="introduction">
      {imageBlock}

      <div className={copyClass}>
        {introImage &&
          <div className="noise" />
        }
        <Title tag="h2" theme="section-title" color="selective-yellow">{props.headline}</Title>
        <p className="large">{props.copy}</p>
        {props.smallCopy &&
          <p>{props.smallCopy}</p>
        }
      </div>
    </section>
  );
};

export default Introduction;

Introduction.defaultProps = {
  headline: 'Headline copy goes here',
  copy: 'Supporting copy for the hero headline goes here. It shouldn\'t be more than a paragraph long.',
  smallCopy: null,
  introMobileImage: null,
  introDesktopImage: null,
};

Introduction.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  headline: PropTypes.string,
  copy: PropTypes.string,
  introMobileImage: PropTypes.string,
  introDesktopImage: PropTypes.string,
  smallCopy: PropTypes.string,
};
