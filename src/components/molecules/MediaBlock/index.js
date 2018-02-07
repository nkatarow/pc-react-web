import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const MediaBlock = props => (
  <section className="media-block">
    <div>
      <img src={props.image} alt="" />
    </div>
    <div>
      {props.children}
    </div>
  </section>
);

MediaBlock.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default MediaBlock;
