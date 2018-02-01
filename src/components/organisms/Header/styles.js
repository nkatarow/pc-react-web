import styled from 'styled-components';
import * as globals from '../../../_ui/js/global-variables';

export const Head = styled.div`
  border-top: 7px solid ${globals.YELLOW};
`;

export const Topbar = styled.div`
  border-bottom: 1px solid ${globals.GRAY_1};
  display: flex;
  flex-direction: row;
  padding: 5%;
  
  h2 {
    display: inline-block;
    font-family: ${globals.FUTURA};
    font-size: 1.7em;
    margin: 0 0 0 1em;
  }
`;

export const Navigation = styled.div`
  background-color: ${globals.GRAY_2};
  display: flex;
  flex-direction: column;
  height: 0;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 68px;
  transition: height 250ms ease;
  
  &.open { height: 100vh; }

  @media screen and (min-width: ${globals.BP_LARGE}) {
    background-color: ${globals.WHITE};
    position: relative;
    top: 0;

    &.open { height: auto; }
  }
`;
