import React from 'react';
import { FaSistrix } from 'react-icons/fa';
import {
  SearchWrapperDiv,
  Input,
  Form,
  SearchContainer,
} from 'components/@common/searchBar/SearchBar.style';

import { useSetRecoilState, useRecoilState } from 'recoil';
import { bookSearchKeywordState, bookReSearch } from 'atom';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [keyword, setKeyword] = useRecoilState(bookSearchKeywordState);
  const setWord = useSetRecoilState(bookReSearch);

  const navigate = useNavigate();

  const handleKeywordValue = (e) => {
    setKeyword(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/searchDetail/${keyword}`);
    setWord(keyword);
    setKeyword('');
  };

  return (
    <SearchWrapperDiv>
      <SearchContainer>
        <Form type='submit' onSubmit={handleSearch}>
          <Input
            type='search'
            name='searchbar'
            label='input'
            placeholder='도서/저자명으로 검색'
            value={keyword}
            onChange={handleKeywordValue}
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
