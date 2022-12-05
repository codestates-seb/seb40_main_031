import React, { useEffect, useState } from 'react';
import DomesticCategory from 'components/searchDetail/DomesticCategory';
import {
  ContainerDiv,
  TabDiv,
  TabSpan,
} from 'components/searchDetail/Tab.style';
import { ResultDiv } from 'components/searchDetail/SearchDetailComponent.style';
import { bookSearchKeywordState, bookReSearch } from 'atom';
import { useRecoilValue } from 'recoil';

const Tab = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const keyword = useRecoilValue(bookSearchKeywordState);
  const word = useRecoilValue(bookReSearch);
  const [fixedKeyword, setFixedKeyword] = useState(keyword);

  const menuArr = [{ name: '국내도서', content: <DomesticCategory /> }];

  const selectMenuHandler = (index) => {
    setCurrentTab(index);
  };
  useEffect(() => {
    setFixedKeyword(word);
  }, [word]);

  return (
    <ContainerDiv>
      <TabDiv>
        {menuArr.map((el, idx) => {
          return (
            <TabSpan
              className={currentTab === idx ? 'focused' : ''}
              key={idx}
              onClick={(e) => {
                selectMenuHandler(idx);
              }}
            >
              {el.name}
            </TabSpan>
          );
        })}
      </TabDiv>

      <h1>{menuArr[currentTab].content}</h1>
      <ResultDiv>``{`${fixedKeyword}`}`` 검색 결과입니다.</ResultDiv>
      {/* <ResultDiv>``{keyword}`` 검색한 결과입니다</ResultDiv> // 둘 다 같은 내용을 출력함*/}
    </ContainerDiv>
  );
};

export default Tab;
