import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Picture = props => (
  <img src={props.src} alt={props.alt} />
);

Picture.defaultProps = {
  alt: '',
};

Picture.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default Picture;
