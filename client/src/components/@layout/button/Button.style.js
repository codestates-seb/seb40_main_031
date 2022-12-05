import styled from 'styled-components';
import { Theme } from 'style';

import { darken, lighten } from 'polished';


const ButtonTemplate = styled.button`
  width: ${(props) => (props.width ? props.width : 'auto')};
  height: ${(props) => (props.height ? props.height : 'auto')};

  color: ${Theme.PRIMARY.WHITE};
  font-weight: bold;
  border-radius: 5px;
  border: none;
  box-shadow: inset 1px 1px 0px 0px hsl(0deg 0% 100% / 70%);

  background-color: ${Theme.PRIMARY.GREEN};

  &:hover {
    background-color: ${Theme.PRIMARY.GREEN_DARK};
  }
  &:active {
    background-color: ${Theme.PRIMARY.GREEN};
    border-color: ${Theme.PRIMARY_GREEN_DARK};
    box-shadow: none;
  }
`;
export { ButtonTemplate };
