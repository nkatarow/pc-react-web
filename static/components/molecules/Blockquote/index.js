import React from 'react';
import PropTypes from 'prop-types';

// Atoms
import Title from '../../atoms/title/';
import './style.css';

const Blockquote = (props) => {
  let background = {};

  if (props.isMobile) {
    background = { backgroundImage: `url(${props.mobileBackground})` };
  } else {
    background = { backgroundImage: `url(${props.desktopBackground})` };
  }

  let cite = '';

  if (props.citeFirstLine || props.citeSecondLine || props.citeThirdLine) {
    let firstLine = null;
    let secondLine = null;
    let thirdLine = null;

    if (props.citeFirstLine) {
      firstLine = (
        <Title tag="span" theme="subhead" color="selective-yellow" caps>{props.citeFirstLine}</Title>
      );
    }

    if (props.citeSecondLine) {
      secondLine = (
        <span className="second-line">{props.citeSecondLine}</span>
      );
    }

    if (props.citeThirdLine) {
      thirdLine = (
        <span className="second-line">{props.citeThirdLine}</span>
      );
    }

    cite = (
      <cite>
        {firstLine}
        {secondLine}
        {thirdLine}
      </cite>
    );
  }

  return (
    <blockquote style={background}>
      <Title tag="p" theme="hero-title" color="white">
        <q>{props.quote}</q>
      </Title>
      {cite}
    </blockquote>
  );
};

Blockquote.defaultProps = {
  citeFirstLine: null,
  citeSecondLine: null,
  citeThirdLine: null,
};

Blockquote.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  mobileBackground: PropTypes.string.isRequired,
  desktopBackground: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  citeFirstLine: PropTypes.string,
  citeSecondLine: PropTypes.string,
  citeThirdLine: PropTypes.string,
};

export default Blockquote;
