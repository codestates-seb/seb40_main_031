import React from 'react';
import { FaSistrix } from 'react-icons/fa';
import {
  SearchWrapperDiv,
  Input,
  Form,
  SearchContainer,
} from 'components/@common/searchBar/SearchBar.style';

const SearchBar = () => {
  return (
    <SearchWrapperDiv>
      <SearchContainer>
        <Form type='submit'>
          <Input
            type='search'
            name='searchbar'
            label='input'
            placeholder='도서/저자명으로 검색'
          />
        </Form>
        <FaSistrix
          style={{
            position: 'absolute',
            left: '8px',
            top: '23%',
            fontSize: '1.5rem',
            color: 'silver',
          }}
        />
      </SearchContainer>
    </SearchWrapperDiv>
  );
};

export default SearchBar;
