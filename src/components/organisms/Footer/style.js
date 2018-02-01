import styled from 'styled-components';
import * as globals from '../../../_ui/js/global-variables';

const Foot = styled.footer`
  background-color: ${globals.GRAY_2};
  color: ${globals.WHITE};
  font-size: 1.3em;
  padding: 10% 5%;
  
  > div {
    display: flex;
    flex-wrap: wrap;
  }
  
  a {
    color: ${globals.WHITE};
    text-decoration: none;
    transition: color 250ms ease;
    
    svg .st0 { 
      fill: ${globals.WHITE}; 
      transition: fill 250ms ease;
    }

    &:hover,
    &:focus {
      color: ${globals.YELLOW};

      svg .st0 { fill: ${globals.YELLOW}; }
    }
  }
  
  .stryker {
    width: 50%;
    
    small {
      color: ${globals.GRAY_7};
      display: block;
      font-size: 1em;
      margin-top: 0.25em;
    }
  }
  
  .follow { 
    width: 50%; 
  
    h2 {
      font-size: 1.3em;
      font-weight: normal;
      margin: 0 0 0.5em;
    }
    
    a { margin-right: 1em; }
  }
  
  .legal { 
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 4em;
    width: 100%; 
    
    a {
      display: inline-block;
      padding-bottom: 1.5em;
    
      &:last-child { padding-bottom: 0; }
    }
  }
  
  @media screen and (min-width: ${globals.BP_LARGE}) {
    font-size: 1.6em;
    padding: 5%;
    
    > div {
      margin: 0 auto;
      max-width: ${globals.MAX_WIDTH};
    }
    
    .stryker, .follow, .legal { width: 33.333333%; }
    .stryker small { margin-top: 1em; }
    .follow h2 { margin-bottom: 1em; }
    
    .legal {
      display: block;
      margin-top: 0;
      
      a { 
        display: block; 
        padding-bottom: 1em;
      }
    }
  }
`;

export default Foot;
