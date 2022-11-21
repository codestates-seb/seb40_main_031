import styled from 'styled-components';
import { Theme } from 'style';
import { darken } from 'polished';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${Theme.PRIMARY.GREEN_LIGHT};
  width: 300px;
  height: 550px;
  padding: 10px;
  border-radius: 5%;
  > Button {
    margin-top: 50px;
  }
`;

const LogoDiv = styled.div`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  margin-bottom: 30px;
  margin-top: 30px;
`;

const SignUpInput = styled.input`
  border: 1px solid ${Theme.PRIMARY.GREEN_DARK};
  width: 200px;
  height: 30px;
  margin-top: 20px;
  padding-left: 5px;
  border-radius: 5px;
  background-color: ${Theme.PRIMARY.WHITE};
  &::placeholder {
    color: ${Theme.PRIMARY.GREEN_DARK};
  }
`;

const SignDiv = styled.div`
  display: flex;
  margin-top: 10px;
`;

const LinkA = styled.a`
  padding-left: 0.5rem;
  &::visited {
    color: blue;
  }
`;

const LineHr = styled.hr`
  margin-top: 50px;
  width: 90%;
  border: none;
  border-top: 1px solid #333;
  color: #333;
  overflow: visible;
  text-align: center;
  height: 5px;

  &::after {
    background: ${Theme.PRIMARY.WHITE};
    content: 'OR';
    padding: 0 4px;
    position: relative;
    top: -13px;
  }
`;

const GoogleSvg = styled.svg`
  background-color: white;
  border-radius: 50%;
  padding: 0.5rem;
  width: 3rem;
  height: 3rem;
  margin-top: 10px;
  &:hover {
    background-color: ${darken(0.1, Theme.PRIMARY.WHITE)};
  }
`;
export { Container, SignUpInput, LogoDiv, SignDiv, LinkA, LineHr, GoogleSvg };
