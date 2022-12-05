import React from 'react';
import {
  ContainerDiv,
  FlexDiv,
  LinkSpan,
} from 'components/searchDetail/Category.style';
import { useSetRecoilState } from 'recoil';
import { bookReSearch, bookSearchCategoryState } from 'atom';
import { useNavigate } from 'react-router-dom';

const DomesticCategory = () => {
  const setCategory = useSetRecoilState(bookSearchCategoryState);
  const setWord = useSetRecoilState(bookReSearch);
  const navigate = useNavigate();

  const handleClick = (e) => {
    setWord('');
    setCategory(e);
    navigate(`/searchDetail/${e}`);
  };

  return (
    <ContainerDiv>
      <FlexDiv className='domestic'>
        <LinkSpan onClick={() => handleClick('101')}>소설</LinkSpan>
        <LinkSpan onClick={() => handleClick('102')}>시/에세이</LinkSpan>
        <LinkSpan onClick={() => handleClick('103')}>예술/대중문화</LinkSpan>
        <LinkSpan onClick={() => handleClick('104')}>사회과학</LinkSpan>
        <LinkSpan onClick={() => handleClick('105')}>역사와 문화</LinkSpan>
        <LinkSpan onClick={() => handleClick('107')}>잡지</LinkSpan>
        <LinkSpan onClick={() => handleClick('108')}>만화</LinkSpan>
        <LinkSpan onClick={() => handleClick('109')}>유아</LinkSpan>
        <LinkSpan onClick={() => handleClick('110')}>아동</LinkSpan>
        <LinkSpan onClick={() => handleClick('111')}>가정과 생활</LinkSpan>
        <LinkSpan onClick={() => handleClick('112')}>청소년</LinkSpan>
        <LinkSpan onClick={() => handleClick('113')}>초등학습서</LinkSpan>
        <LinkSpan onClick={() => handleClick('114')}>고등학습서</LinkSpan>
        <LinkSpan onClick={() => handleClick('115')}>국어/외국어/사전</LinkSpan>
        <LinkSpan onClick={() => handleClick('116')}>자연과 과학</LinkSpan>
        <LinkSpan onClick={() => handleClick('117')}>경제경영</LinkSpan>
        <LinkSpan onClick={() => handleClick('118')}>자기계발</LinkSpan>
        <LinkSpan onClick={() => handleClick('119')}>인문</LinkSpan>
        <LinkSpan onClick={() => handleClick('120')}>종교/역학</LinkSpan>
        <LinkSpan onClick={() => handleClick('122')}>컴퓨터/인터넷</LinkSpan>
        <LinkSpan onClick={() => handleClick('123')}>자격서/수험서</LinkSpan>
        <LinkSpan onClick={() => handleClick('124')}>취미/레저</LinkSpan>
        <LinkSpan onClick={() => handleClick('125')}>
          전공도서/대학교재
        </LinkSpan>
        <LinkSpan onClick={() => handleClick('126')}>건강/뷰티</LinkSpan>
        <LinkSpan onClick={() => handleClick('128')}>여행</LinkSpan>
        <LinkSpan onClick={() => handleClick('129')}>중등학습서</LinkSpan>
      </FlexDiv>
    </ContainerDiv>
  );
};
export default DomesticCategory;
