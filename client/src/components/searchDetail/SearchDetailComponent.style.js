import styled from 'styled-components';
import { darken } from 'polished';

const ContainerDiv = styled.div`
  width: 100%;
  max-width: 1000px;
`;

const ResultDiv = styled.div`
  margin: 7rem 0 3rem 2rem;
  color: ${darken(0.15, '#febd5a')};
  font-weight: bold;
  font-size: 2rem;
`;
export { ContainerDiv, ResultDiv };
