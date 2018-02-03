import React from 'react';
import PropTypes from 'prop-types';

import Title from '../../atoms/title/';

import './style.css';

const ProductIntro = (props) => {
  let containerClass = 'product-intro';

  if (props.theme) {
    containerClass = `product-intro product-intro--${props.theme}`;
  }

  return (
    <section className={containerClass}>
      <div>
        <Title tag="h2" theme="context-head" color={props.contextColor}>{props.contextHead}</Title>
        <Title tag="h3" theme="section-title">{props.headline}</Title>
        <p>{props.copy}</p>
      </div>
    </section>
  );
};

export default ProductIntro;

ProductIntro.defaultProps = {
  contextColor: 'black',
  theme: null,
  copy: null,
};

ProductIntro.propTypes = {
  theme: PropTypes.string,
  contextHead: PropTypes.string.isRequired,
  contextColor: PropTypes.string,
  headline: PropTypes.string.isRequired,
  copy: PropTypes.string,
};
