import styled from 'styled-components';
import * as globals from '../../../_ui/js/global-variables';

export const Utility = styled.nav`
  order: 2;
  
  > div {
    display: flex;
    flex-direction: column;
    padding: 2em 0;
    width: 100%;
    
    h2 { display: none; }
    
    a {
      color: ${globals.GRAY_4};
      display: block;
      font-family: ${globals.FUTURA};
      font-size: 1.5em;
      margin-bottom: 0.25em;
      letter-spacing: .2em;
      order: 2;
      padding: 1em 5%;
      text-decoration: none;
      text-transform: uppercase;
    
      svg {
        margin-right: 1em;
        
        .st0{ fill: ${globals.GRAY_4}; }
      }

      &.product { 
        color: ${globals.YELLOW}; 
        
        svg .st0{ fill: ${globals.YELLOW}; }
      }
    }
  }
  
  @media screen and (min-width: ${globals.BP_LARGE}) {
    background-color: ${globals.GRAY_7};

    > div {
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
      margin: 0 auto;
      max-width: ${globals.MAX_WIDTH};
      padding: 1em 0;
      order: 1;
      
      .company { order: 1; }
      
      > div { 
        align-items: center;
        display: flex;
        order: 2; 
      }
      
      h2 { 
        color: ${globals.GRAY_4};
        display: inline-block; 
        font-size: 1.3em;
        font-family: ${globals.FUTURA};
        letter-spacing: .2em;
        order: 2;
        text-transform: uppercase;
      }
      
      a {
        color: ${globals.BLACK};
        font-size: 1.3em;
        order: 1;
        margin-bottom: 0;
        padding: 0;
        transition: color 250ms ease;
        
        &:hover,
        &:focus {
          color: ${globals.YELLOW}
        }
        
        &.company {
          font-size: 2.3em;
          letter-spacing: 0;
          text-transform: none;
        
          svg { display: none; }
        }
        
        &.product { 
          color: ${globals.BLACK};
          order: 3; 
          padding-left: 3em;
          transition: color 250ms ease;
          
          &:hover,
          &:focus {
            color: ${globals.YELLOW}
          }

          svg .st0 { fill: ${globals.BLACK}; }
        }
      }
    }
  }
`;

export const LinkLabel = styled.span`
  @media screen and (min-width: ${globals.BP_LARGE}) {
    display: none;
  }
`;
