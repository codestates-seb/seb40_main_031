import React from 'react';
import Book from '../@layout/book/Book';
import { ContainerDiv } from './SearchDetailCompo.style';
import Tab from './Tab';

const SearchDetailCompo = () => {
  return (
    <ContainerDiv>
      <Tab />
      <Book />
    </ContainerDiv>
  );
};

export default SearchDetailCompo;
