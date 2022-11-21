import React from 'react';
import { ContainerDiv, FlexDiv, LinkA } from './Category.style';

const ForeignCategory = () => {
  return (
    <ContainerDiv>
      <FlexDiv className='international'>
        <LinkA href='#'>어린이</LinkA>
        <LinkA href='#'>ELT/사전</LinkA>
        <LinkA href='#'>문학</LinkA>
        <LinkA href='#'>경영/인문</LinkA>
        <LinkA href='#'>예술/디자인</LinkA>
        <LinkA href='#'>실용</LinkA>
        <LinkA href='#'>해외잡지</LinkA>
        <LinkA href='#'>대학교재/전문서적</LinkA>
        <LinkA href='#'>컴퓨터</LinkA>
        <LinkA href='#'>일본도서</LinkA>
        <LinkA href='#'>프랑스도서</LinkA>
        <LinkA href='#'>중국도서</LinkA>
        <LinkA href='#'>해외주문원서</LinkA>
      </FlexDiv>
    </ContainerDiv>
  );
};

export default ForeignCategory;
