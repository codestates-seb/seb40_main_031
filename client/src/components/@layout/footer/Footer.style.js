import styled from 'styled-components';
import { Theme } from 'style';

const Wrap = styled.div`
  width: 100%;
  height: 200px;
  background-color: ${Theme.PRIMARY.GREEN_DARK};
  position: absolute;
  bottom: 0;
  left: 0;
`;

const LayoutContainer = styled.div`
  @media screen {
    max-width: 1320px;
    margin: auto;
  }
`;

export { Wrap, LayoutContainer };
