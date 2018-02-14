import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.css';

const HalfHalf = (props) => {
  const classProps = classNames(
    'half-half',
    props.layout,
  );
  return (
    <div className={classProps}>
      {props.children}
    </div>
  );
};

export default HalfHalf;

HalfHalf.defaultProps = {
  layout: null,
};

HalfHalf.propTypes = {
  children: PropTypes.node.isRequired,
  layout: PropTypes.string,
};
