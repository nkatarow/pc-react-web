import styled from 'styled-components';
import * as globals from '../../../_ui/js/global-variables';

export const Btn = styled.button`
  appearance: none;
  background-color: ${globals.YELLOW};
  border: 0;
  
  &.outlined {
    background-color: ${globals.WHITE};
    border: 2px solid ${globals.YELLOW};
  }
`;

export default Btn;
