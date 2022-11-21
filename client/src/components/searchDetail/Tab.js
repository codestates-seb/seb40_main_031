import React, { useState } from 'react';
import DomesticCategory from './DomesticCategory';
import ForeignCategory from './ForeignCategory';
import { ContainerDiv, TabDiv, TabSpan } from './Tab.style';
import { ResultDiv } from './SearchDetailCompo.style';

const Tab = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const menuArr = [
    { name: '국내도서', content: <DomesticCategory /> },
    { name: '해외도서', content: <ForeignCategory /> },
  ];

  const selectMenuHandler = (index) => {
    setCurrentTab(index);
  };

  return (
    <>
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
        <ResultDiv>`니가 찾는 책이 이 책이느냐` 검색한 결과입니다</ResultDiv>
      </ContainerDiv>
    </>
  );
};

export default Tab;
