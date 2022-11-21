import styled from 'styled-components';
import { Theme } from 'style';

const Wrap = styled.div``;

const Input = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  padding: 10px 10px 10px 45px;
  width: 15vw;
  position: relative;
  &:hover {
    border: 1px solid ${Theme.PRIMARY.GREEN_DARK};
  }
  &:focus {
    outline: rgba(0, 0, 0, 0.4);
  }
`;

const SearchContainer = styled.div`
  position: relative;
`;

const Form = styled.form``;
export { Wrap, Input, SearchContainer, Form };
