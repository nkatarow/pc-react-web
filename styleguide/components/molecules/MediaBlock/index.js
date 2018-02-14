import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.css';

export const MediaBlockSize = {
  DEFAULT: 'default-size',
  LARGE: 'large',
};

export const MediaBlockTheme = {
  DEFAULT: 'default-theme',
  IMAGE: 'image',
};

const MediaBlock = (props) => {
  let background = null;

  if (props.isMobile) {
    background = { backgroundImage: `url(${props.bgMobile})` };
  } else {
    background = { backgroundImage: `url(${props.bgDesktop})` };
  }

  const classProps = classNames(
    'media-block',
    props.size,
    props.theme,
  );

  return (
    <section className={classProps} style={background}>
      <div>
        <div>
          <img src={props.image} alt="" />
        </div>
        <div>
          {props.children}
        </div>
      </div>
    </section>
  );
};

MediaBlock.defaultProps = {
  bgMobile: null,
  bgDesktop: null,
  isMobile: false,
  size: MediaBlockSize.DEFAULT,
  theme: MediaBlockTheme.DEFAULT,
};

MediaBlock.propTypes = {
  size: PropTypes.string,
  theme: PropTypes.string,
  isMobile: PropTypes.bool,
  bgMobile: PropTypes.string,
  bgDesktop: PropTypes.string,
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default MediaBlock;
