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
};

Title.propTypes = {
  /** Options are h1-h6 */
  tag: PropTypes.string.isRequired,
  /** Use CSS color variable */
  color: PropTypes.string,
  /** Options are TitleThemes.PAGE\_TITLE, TitleThemes.HERO\_TITLE, TitleThemes.SECTION\_TITLE, TitleThemes.HEADLINE, TitleThemes.SUBHEAD, TitleThemes.CONTEXT\_HEAD  */
  theme: PropTypes.string.isRequired,
  caps: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
