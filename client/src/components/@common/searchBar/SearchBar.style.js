import styled from 'styled-components';
import { Theme } from 'style';

const SearchWrapperDiv = styled.div`
  display: flex;
`;

const SearchContainer = styled.div`
  display: flex;
  position: relative;
`;

const Input = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  padding: 10px 10px 10px 30px;
  width: 100%;
  min-width: 40px;
  height: 2.5rem;

  &::placeholder {
    color: silver;
    font-size: 0.9rem;
  }

  &:hover {
    border: 1px solid ${Theme.PRIMARY.GREEN_DARK};
  }
  &:focus {
    outline: rgba(0, 0, 0, 0.4);
  }
`;

const Form = styled.form``;
export { SearchWrapperDiv, Input, SearchContainer, Form };
