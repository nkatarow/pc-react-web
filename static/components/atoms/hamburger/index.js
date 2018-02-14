import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const HamburgerMenu = (props) => {
  let burgerStatus = '';

  if (props.status) {
    burgerStatus = 'open';
  }

  return (
    <button className={burgerStatus} onClick={props.onClick}>
      <span />
      <span />
      <span />
    </button>
  );
};

export default HamburgerMenu;

HamburgerMenu.propTypes = {
  onClick: PropTypes.func.isRequired,
  status: PropTypes.bool.isRequired,
};
