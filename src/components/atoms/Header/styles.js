import React from 'react';
import styled from 'styled-components';
import * as globals from '../../../_ui/js/global-variables';

const elementType = React.createElement;

const HeaderElement = styled(({ tag, children, ...props }) => elementType(tag, props, children))`
  color: ${props => props.color};
  font-weight: normal;
  line-height: 1em;
  margin: 0;
  
  &[appearance="h1"] {
    font-size: 5em;
    font-family: ${globals.EGYPT};
    
    @media screen and (min-width: ${globals.BP_LARGE}) {
      font-size: 7.8em;
    }
  }

  &[appearance="h2"] {
    font-size: 3em;
    font-family: ${globals.EGYPT};

    @media screen and (min-width: ${globals.BP_LARGE}) {
      font-size: 5em;
    }
  }

  &[appearance="h3"] {
    font-size: 2.5em;
    font-family: ${globals.FUTURA};

    @media screen and (min-width: ${globals.BP_LARGE}) {
      font-size: 4em;
    }
  }

  &[appearance="h4"] {
    font-size: 2.1em;
    font-family: ${globals.FUTURA};

    @media screen and (min-width: ${globals.BP_LARGE}) {
      font-size: 2.6em;
    }    
  }

  &[appearance="h5"] {
    font-size: 1.8em;
    font-family: ${globals.FUTURA};

    @media screen and (min-width: ${globals.BP_LARGE}) {
      font-size: 2.1em;
    }
  }
  
  &[appearance="h6"] {
    border-bottom: 2px solid;
    display: inline-block;
    font-size: 1.3em;
    font-family: ${globals.FUTURA};
    text-transform: uppercase;
  }
`;

export default HeaderElement;
