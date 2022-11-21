import React from 'react';
import { FaSistrix } from 'react-icons/fa';
import { Wrap, Input, SearchContainer, Form } from './SearchBar.style';

const SearchBar = () => {
  return (
    <Wrap>
      <SearchContainer>
        <Form type='submit'>
          <Input type='search' name='searchbar' labal='input' />
        </Form>
        <FaSistrix
          style={{
            position: 'absolute',
            top: '20%',
            right: '88%',
            fontSize: '1.9em',
          }}
        />
      </SearchContainer>
    </Wrap>
  );
};

export default SearchBar;
