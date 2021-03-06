import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import './style.css';

export const MediaListTheme = {
  DEFAULT: 'default',
  GRAY: 'medialist--gray',
};

const countChildren = (props) => {
  let count = 0;
  React.Children.map(props.children, () => {
    count += 1;
  });
  return count;
};

const MediaList = (props) => {
  let maxColumns = '';

  if (!props.isMobile) {
    const kids = countChildren(props);

    if (kids > 4) {
      maxColumns = 'four-col';
    } else if (kids === 4 && kids % 2 === 0) {
      maxColumns = 'two-col double';
    } else if (kids % 2 === 0) {
      maxColumns = 'two-col';
    } else if (kids % 3 === 0) {
      maxColumns = 'three-col';
    }
  }

  const classProps = classNames(
    'medialist',
    props.theme,
    maxColumns,
  );

  return (
    <section className={classProps}>
      <div className="list-contain">
        { props.children }
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  isMobile: state.mobilestate.isMobile,
});

MediaList.propTypes = {
  /** MediaListTheme.DEFAULT or MediaListTheme.GRAY */
  theme: PropTypes.string,
  isMobile: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

MediaList.defaultProps = {
  theme: MediaListTheme.DEFAULT,
};

export default connect(mapStateToProps)(MediaList);
