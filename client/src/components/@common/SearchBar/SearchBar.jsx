import React from 'react';
import { FaSistrix } from 'react-icons/fa';
import * as S from './SearchBar.style';

const SearchBar = () => {
  return (
    <S.Wrap>
      <S.SearchContainer>
        <S.Form type='submit'>
          <S.Input type='search' name='searchbar' labal='input' />
        </S.Form>
        <FaSistrix
          style={{
            position: 'absolute',
            top: '20%',
            right: '88%',
            fontSize: '1.9em',
          }}
        />
      </S.SearchContainer>
    </S.Wrap>
  );
};

export default SearchBar;
