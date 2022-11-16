import styled from 'styled-components';
import { Theme } from '../../style';
const Wrap = styled.div`
  width: 67%;
  margin: 0 auto;
`;
const Title = styled.div`
  font-size: 2em;
  padding: 2em;
  margin-top: 1.5em;
  margin-left: 12%;
  margin-bottom: 1.5em;
`;

const TabContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TabButton = styled.button`
  width: 10%;
  height: 10%;
  font-size: 1.5em;
  border: none;
  border-bottom: 1px solid ${Theme.PRIMARY.GREEN_DARK};
  background-color: white;
  margin-left: 5px;

  &:hover {
    background-color: ${Theme.PRIMARY.GREEN_LIGHT};
    color: rgba(0, 0, 0, 0.5);
    border: none;
    transition: all 0.2s;
  }
`;

export { Wrap, Title, TabButton, TabContainer };
