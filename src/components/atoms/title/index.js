import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.css';

export const TitleThemes = {
  PAGE_TITLE: 'page-title',
  HERO_TITLE: 'hero-title',
  SECTION_TITLE: 'section-title',
  HEADLINE: 'headline',
  SUBHEAD: 'subhead',
  CONTEXT_HEAD: 'context-head',
};

const Title = (props) => {
  let caps = '';

  if (props.caps) {
    caps = 'caps';
  }

  const classProps = classNames(
    props.tag,
    caps,
    props.theme,
    props.color,
  );

  const HeaderTag = props.tag;

  return (
    <HeaderTag className={classProps}>{props.children}</HeaderTag>
  );
};

export default Title;

Title.defaultProps = {
  caps: false,
  color: 'black',
  theme: TitleThemes.SECTION_TITLE,
};

Title.propTypes = {
  color: PropTypes.string,
  theme: PropTypes.string,
  caps: PropTypes.bool,
  tag: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
