import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as globals from '../../../_ui/js/global-variables';

const HamburgerMenu = props => (
  <Button className={props.status && 'open'} onClick={props.toggle}>
    <span />
    <span />
    <span />
  </Button>
);

export default HamburgerMenu;

HamburgerMenu.propTypes = {
  toggle: PropTypes.func.isRequired,
  status: PropTypes.bool.isRequired,
};

const Button = styled.button`
  height: 20px;
  position: relative;
  width: 25px;
  
  span {
    background-color: ${globals.GRAY_3};
    display: block;
    height: 2px;
    left: 0;
    position: absolute;
    transform-origin: 0;
    width: 100%;
    
    &:nth-child(1) { 
      top: 0; 
      transition: transform 250ms ease;
    }
    &:nth-child(2) { 
      opacity: 1;
      top: calc(50% - 1px); 
      transition: opacity 250ms ease;
    }
    &:nth-child(3) { 
      bottom: 0; 
      transition: transform 250ms ease;
    }
  }
  
  &.open span {
    &:nth-child(1) { transform: rotate(45deg); }
    &:nth-child(2) { opacity: 0; }
    &:nth-child(3) { transform: rotate(-45deg); }
  }
  
`;
