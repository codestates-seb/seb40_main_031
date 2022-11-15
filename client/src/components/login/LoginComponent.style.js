import styled from 'styled-components';
import { Theme } from '../../style/index';
import { darken } from 'polished';

const WrapperDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 10px;
  width: 300px;
  height: 500px;

  border-radius: 5%;
  background-color: ${Theme.PRIMARY.GREEN_LIGHT};

  > Button {
    margin-top: 50px;
  }
`;

const AdvertiseDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  font-weight: bold;
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const LoginInput = styled.input`
  width: 200px;
  height: 30px;
  margin-top: 20px;
  padding-left: 5px;
  background-color: ${Theme.PRIMARY.GREEN_LIGHT};
  border: 1px solid ${Theme.PRIMARY.GREEN_DARK};

  &::placeholder {
    color: ${Theme.PRIMARY.GREEN_DARK};
  }
`;

const LinkToSignUpDiv = styled.div`
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
    background: #fff;
    content: 'OR';
    padding: 0 4px;
    position: relative;
    top: -13px;
  }
`;

const OAuthListDiv = styled.div`
  display: flex;
`;

const OAuthSvg = styled.svg`
  display: flex;
  text-align: center;
  color: ${Theme.PRIMARY.BLACK};
  font-weight: bold;
  margin-top: 10px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : Theme.PRIMARY.WHITE};

  border-radius: 50%;
  padding: 0.5rem;
  width: 3rem;
  height: 3rem;

  &:hover {
    background-color: ${(props) =>
      props.backgroundColor
        ? darken(0.1, props.backgroundColor)
        : darken(0.1, Theme.PRIMARY.WHITE)};
  }
`;

export {
  WrapperDiv,
  AdvertiseDiv,
  LoginInput,
  LinkToSignUpDiv,
  LinkA,
  OAuthListDiv,
  OAuthSvg,
  LineHr,
};
