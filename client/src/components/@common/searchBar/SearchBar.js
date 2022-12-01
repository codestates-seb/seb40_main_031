import React from 'react';
import { FaSistrix } from 'react-icons/fa';
import {
  SearchWrapperDiv,
  Input,
  Form,
  SearchContainer,
} from 'components/@common/searchBar/SearchBar.style';

import { useRecoilState } from 'recoil';
import { bookSearchKeywordState } from 'atom';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [keyword, setKeyword] = useRecoilState(bookSearchKeywordState);

  const navigate = useNavigate();

  const handleKeywordValue = (e) => {
    setKeyword(e.target.value);
  };

  //! book 검색 api 만들어지면 axios get 요청 구현 필요
  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/searchDetail');
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
            top: '30%',
            fontSize: '15px',
            color: 'silver',
          }}
        />
      </SearchContainer>
    </SearchWrapperDiv>
  );
};

export default SearchBar;
