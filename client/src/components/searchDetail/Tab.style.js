import styled from 'styled-components';
import { Theme } from 'style';
import { darken } from 'polished';

const ContainerDiv = styled.div`
  width: 100%;
`;

const TabDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  list-style: none;
  padding-left: 0px;
  margin-top: 1rem;
  .focused {
    font-weight: bold;
    color: ${darken(0.35, Theme.PRIMARY.GREEN_DARK)};
  }
  span:first-child {
    border-top-left-radius: 10px;
  }
  span:last-child {
    border-top-right-radius: 10px;
  }
`;

const TabSpan = styled.span`
  display: flex;
  color: gray;
  width: 100% auto;
  padding: 10px 10px;
  cursor: pointer;
  background-color: ${Theme.PRIMARY.GREEN_LIGHT};
  font-family: 'Do Hyeon';
`;

export { ContainerDiv, TabDiv, TabSpan };
