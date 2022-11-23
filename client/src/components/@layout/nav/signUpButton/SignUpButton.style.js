import styled from 'styled-components';
import { Theme } from 'style';

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  border: none;
`;
const Button = styled.button`
  min-width: 45px;
  border-style: none;
  font-size: 1rem;
  background-color: ${(props) => props.backgoudColor || Theme.PRIMARY.GREEN};
`;
export { Wrap, Button };
