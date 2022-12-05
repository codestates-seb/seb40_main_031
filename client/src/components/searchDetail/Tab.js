import React, { useEffect, useState } from 'react';
import DomesticCategory from 'components/searchDetail/DomesticCategory';
import {
  ContainerDiv,
  TabDiv,
  TabSpan,
} from 'components/searchDetail/Tab.style';
import { ResultDiv } from 'components/searchDetail/SearchDetailComponent.style';
import {
  bookSearchKeywordState,
  bookReSearch,
  bookSearchCategoryState,
} from 'atom';
import { useRecoilValue } from 'recoil';

const Tab = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const keyword = useRecoilValue(bookSearchKeywordState);
  const word = useRecoilValue(bookReSearch);
  const category = useRecoilValue(bookSearchCategoryState);
  const [fixedKeyword, setFixedKeyword] = useState(keyword);
  const [fixedCategory, setFixedCategory] = useState(category);

  const menuArr = [{ name: '국내도서', content: <DomesticCategory /> }];

  const selectMenuHandler = (index) => {
    setCurrentTab(index);
  };
  const categoryChanger = (category) => {
    let result = '';
    category === '101'
      ? (result = '소설')
      : category === '102'
      ? (result = '시/에세이')
      : category === '103'
      ? (result = '예술/대중문화')
      : category === '104'
      ? (result = '사회과학')
      : category === '105'
      ? (result = '역사화 문화')
      : category === '107'
      ? (result = '잡지')
      : category === '108'
      ? (result = '만화')
      : category === '109'
      ? (result = '유아')
      : category === '110'
      ? (result = '아동')
      : category === '111'
      ? (result = '가정과 생활')
      : category === '112'
      ? (result = '청소년')
      : category === '113'
      ? (result = '초등학습서')
      : category === '114'
      ? (result = '고등학습서')
      : category === '115'
      ? (result = '국어/외국어/사전')
      : category === '116'
      ? (result = '자연과 과학')
      : category === '117'
      ? (result = '경제경영')
      : category === '118'
      ? (result = '자기계발')
      : category === '119'
      ? (result = '인문')
      : category === '120'
      ? (result = '종교/역학')
      : category === '122'
      ? (result = '컴퓨터/인터넷')
      : category === '123'
      ? (result = '자격서/수험서')
      : category === '124'
      ? (result = '취미/레저')
      : category === '125'
      ? (result = '전공서적/대학교재')
      : category === '126'
      ? (result = '건강/뷰티')
      : category === '128'
      ? (result = '여행')
      : category === '129'
      ? (result = '중등학습서')
      : null;
    return result;
  };

  useEffect(() => {
    setFixedKeyword(word);
    setFixedCategory(categoryChanger(category));
  }, [word, category]);

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
      <ResultDiv>
        ``{`${fixedKeyword}${fixedCategory}`}`` 검색 결과입니다.
      </ResultDiv>
      {/* <ResultDiv>``{keyword}`` 검색한 결과입니다</ResultDiv> // 둘 다 같은 내용을 출력함*/}
    </ContainerDiv>
  );
};

export default Tab;
