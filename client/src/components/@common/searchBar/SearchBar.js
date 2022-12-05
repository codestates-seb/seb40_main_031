import React, { useState } from 'react';
import { FaSistrix } from 'react-icons/fa';
import {
  SearchWrapperDiv,
  Input,
  Form,
  SearchContainer,
} from 'components/@common/searchBar/SearchBar.style';
import { AlertModal } from 'components';

import { useSetRecoilState, useRecoilState } from 'recoil';
import {
  bookSearchKeywordState,
  bookReSearch,
  bookSearchCategoryState,
} from 'atom';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [keyword, setKeyword] = useRecoilState(bookSearchKeywordState);
  const setWord = useSetRecoilState(bookReSearch);
  const setCategory = useSetRecoilState(bookSearchCategoryState);

  const [alert, setAlert] = useState({
    open: false,
    title: '',
    message: '',
    callback: false,
  });

  const navigate = useNavigate();

  const handleKeywordValue = (e) => {
    setKeyword(e.target.value);
  };

  const handleSearch = (e) => {
    if (keyword !== '') {
      e.preventDefault();
      navigate(`/searchDetail/${keyword}`);
      setWord(keyword);
      setKeyword('');
      setCategory('');
    } else {
      e.preventDefault();
      setAlert({
        open: true,
        title: '오류',
        message: '검색어를 입력해주세요.',
      });
    }
  };

  return (
    <>
      <AlertModal
        open={alert.open}
        setPopup={setAlert}
        message={alert.message}
        title={alert.title}
        callback={alert.callback}
      />
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
    </>
  );
};

export default SearchBar;
