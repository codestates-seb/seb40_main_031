import React from 'react';
import { FaSistrix } from 'react-icons/fa';
import * as S from './SearchBar.style';

const SearchBar = () => {
  return (
    <S.Wrap>
      <S.SearchContainer>
        <S.Input type='text' action='submit' name='searchbar' />
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
