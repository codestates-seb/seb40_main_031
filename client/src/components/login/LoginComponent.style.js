import styled from 'styled-components';
import { Theme } from '../../style/index';

const WrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 10px;

  width: 300px;
  background-color: #eee;
`;

const AdvertiseDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  font-size: 20px;
`;

const LoginInput = styled.input`
  width: 200px;
  height: 2rem;
  background-color: ${Theme.PRIMARY.GREEN_LIGHT};
  padding-left: 5px;

  &::placeholder {
    color: ${Theme.PRIMARY.GREEN_DARK};
  }
`;

const OAuthListDiv = styled.div`
  display: flex;
`;

export { WrapperDiv, AdvertiseDiv, LoginInput };
