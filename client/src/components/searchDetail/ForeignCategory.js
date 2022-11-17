import React from 'react';
import * as S from './Category.style';

const ForeignCategory = () => {
  return (
    <S.ContainerDiv>
      <S.FlexDiv className='international'>
        <S.LinkA href='#'>어린이</S.LinkA>
        <S.LinkA href='#'>ELT/사전</S.LinkA>
        <S.LinkA href='#'>문학</S.LinkA>
        <S.LinkA href='#'>경영/인문</S.LinkA>
        <S.LinkA href='#'>예술/디자인</S.LinkA>
        <S.LinkA href='#'>실용</S.LinkA>
        <S.LinkA href='#'>해외잡지</S.LinkA>
        <S.LinkA href='#'>대학교재/전문서적</S.LinkA>
        <S.LinkA href='#'>컴퓨터</S.LinkA>
        <S.LinkA href='#'>일본도서</S.LinkA>
        <S.LinkA href='#'>프랑스도서</S.LinkA>
        <S.LinkA href='#'>중국도서</S.LinkA>
        <S.LinkA href='#'>해외주문원서</S.LinkA>
      </S.FlexDiv>
    </S.ContainerDiv>
  );
};

export default ForeignCategory;
