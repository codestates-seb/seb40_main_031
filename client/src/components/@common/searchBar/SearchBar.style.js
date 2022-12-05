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
  min-width: 100px;
  height: 2.5rem;
  font-size: 1.7vw;
  @media screen and (min-width: 1200px) {
    font-size: 20.4px;
  }
  @media screen and (max-width: 900px) {
    font-size: 15.3px;
  }

  &::placeholder {
    color: silver;
    font-size: 1.5vw;
    @media screen and (min-width: 1200px) {
      font-size: 18px;
    }
    @media screen and (max-width: 900px) {
      font-size: 13.5px;
    }
    @media screen and (max-width: 700px) {
      color: white;
    }
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
