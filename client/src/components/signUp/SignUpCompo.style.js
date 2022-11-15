import styled from 'styled-components';
import { Theme } from '../../style';

const Container = styled.div`
  display: flex;
  flex-direction: column; // 기록해
  background-color: aliceblue;
  width: 300px;
  height: 700px;
  padding: 10px;
  > Button {
    margin-bottom: 30px;
  }
`;

const SignUpInput = styled.input`
  width: 200px;
  height: 30px;
  margin-top: 10px;
  background-color: ${Theme.PRIMARY.GREEN_LIGHT};
  padding-left: 5px;
  &::placeholder {
    color: ${Theme.PRIMARY.GREEN_DARK};
  }
`;
export { Container, SignUpInput };
