import styled from 'styled-components';
import { subtleBoxShadow, lightBlueBackground, greenBoxShadow, redBoxShadow } from "../Shared/Styles";

export const SelectableTile = styled.div`
  ${subtleBoxShadow};
  ${lightBlueBackground};
  padding: 10px;
  
  &:hover {
    cursor: pointer;
    ${greenBoxShadow}
  }
`;


export const DeletableTile = styled.div`
  ${lightBlueBackground};
  padding: 10px;


  &:hover {
    cursor: pointer;
    ${redBoxShadow}
  }
`;

export const DisabledTile = styled.div`
  pointer-events: none;
  opacity: 0.4;
`;