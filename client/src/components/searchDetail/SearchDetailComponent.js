import React from 'react';
import { Book } from 'components/@layout';
import { ContainerDiv } from 'components/searchDetail/SearchDetailComponent.style';
import Tab from 'components/searchDetail/Tab';

const SearchDetailComponent = () => {
  return (
    <ContainerDiv>
      <Tab />
      <Book />
    </ContainerDiv>
  );
};

export default SearchDetailComponent;
