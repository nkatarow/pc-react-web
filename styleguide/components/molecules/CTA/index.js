import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Title from '../../atoms/title/';
import './style.css';

const CTA = props => (
  <section className="cta">
    <Title tag="h2" theme="section-title">{props.headline}</Title>
    <Link to={props.linkUrl}>
      <svg
        x="0px"
        y="0px"
        width="17.3px"
        height="16.8px"
        viewBox="0 0 17.3 16.8"
        style={{ enableBackground: 'new 0 0 17.3 16.8' }}
        xmlSpace="preserve"
      >
        <g>
          <polygon points="8.8,16.8 6.9,14.9 13.4,8.4 6.9,1.9 8.8,0 17.3,8.4" />
          <rect y="7.1" width="15.3" height="2.7" />
        </g>
      </svg>
      <Title tag="p" theme="subhead">
        {props.linkText}
      </Title>
    </Link>
  </section>
);

export default CTA;

CTA.defaultProps = {
  headline: 'Take the next step',
  linkText: 'Schedule a demo',
  linkUrl: '/contact-us',
};

CTA.propTypes = {
  headline: PropTypes.string,
  linkText: PropTypes.string,
  linkUrl: PropTypes.string,
};
