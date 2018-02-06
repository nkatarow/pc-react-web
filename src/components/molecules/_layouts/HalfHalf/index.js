import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const HalfHalf = props => (
  <div className="half-half">
    {props.children}
  </div>
);

export default HalfHalf;

HalfHalf.propTypes = {
  children: PropTypes.node.isRequired,
};
