import styled from 'styled-components';
import * as globals from '../../../_ui/js/global-variables';

export const Nav = styled.nav`
  background-color: ${globals.WHITE};
  order: 1;
  width: 100vw;
  
  nav a {
    color: ${globals.BLACK};
    background-color: ${globals.GRAY_7};
    display: block;
    font-family: ${globals.FUTURA};
    font-size: 1.5em;
    letter-spacing: .1em;
    margin-bottom: 0.1em;
    padding: 1em 5%;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 250ms ease;
    
    &:last-child { margin-bottom: 0; }
  }

  @media screen and (min-width: ${globals.BP_LARGE}) {
    order: 2;
  
    nav {
      display: flex;
      flex-direction: row;
      margin: 0 auto;
      max-width: ${globals.MAX_WIDTH};

      a {
        background-color: ${globals.WHITE};
        padding: 0 2em 0 0;
      
        &:hover,
        &:focus {
          color: ${globals.YELLOW};
        }
      }
    }
  }
`;

export const BrandingBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 3em 0;
  margin: 0 auto;
  max-width: ${globals.MAX_WIDTH};

  a { 
    text-decoration: none; 
    
    h2 { transition: color 250ms ease; }
    
    &:hover,
    &:focus {
      h2 { color: ${globals.YELLOW}; }
    }
  }
`;
