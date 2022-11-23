import React, { useState } from 'react';
import DomesticCategory from 'components/searchDetail/DomesticCategory';
import ForeignCategory from 'components/searchDetail/ForeignCategory';
import {
  ContainerDiv,
  TabDiv,
  TabSpan,
} from 'components/searchDetail/Tab.style';
import { ResultDiv } from 'components/searchDetail/SearchDetailComponent.style';
import { bookSearchKeywordState } from 'atom';
import { useRecoilValue } from 'recoil';

const Tab = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const keyword = useRecoilValue(bookSearchKeywordState);

  const menuArr = [
    { name: '국내도서', content: <DomesticCategory /> },
    { name: '해외도서', content: <ForeignCategory /> },
  ];

  const selectMenuHandler = (index) => {
    setCurrentTab(index);
  };

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
      <ResultDiv>``{`${keyword}`}`` 검색한 결과입니다</ResultDiv>
      {/* <ResultDiv>``{keyword}`` 검색한 결과입니다</ResultDiv> // 둘 다 같은 내용을 출력함*/}
    </ContainerDiv>
  );
};

export default Tab;
