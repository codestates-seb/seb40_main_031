import styled from 'styled-components';
import { Theme } from '../../../../style';

const Wrap = styled.div`
  width: 67%;
  height: 400px;
  background-color: ${Theme.PRIMARY.GREEN_LIGHT};
  margin-left: 16.5%;
`;

const ModalList = styled.li`
  list-style: none;
  font-size: 23px;
  padding: 2%;
`;

export { Wrap, ModalList };
