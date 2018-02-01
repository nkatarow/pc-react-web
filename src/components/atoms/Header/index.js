import React from 'react';
import PropTypes from 'prop-types';
import HeaderElement from './styles';
import * as globals from '../../../_ui/js/global-variables';

const Header = props => (
  <HeaderElement tag={props.tag} appearance={props.appearance} color={props.color}>
    {props.children}
  </HeaderElement>
);

export default Header;

Header.defaultProps = {
  color: globals.BLACK,
};

Header.propTypes = {
  children: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  appearance: PropTypes.string.isRequired,
  color: PropTypes.string,
};

