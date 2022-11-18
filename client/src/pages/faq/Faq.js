import React, { useState } from 'react';
import * as S from './Faq.style';

import { FAQ_TAB_BUTTON } from '../../constants/Pages';
import { FAQ_LIST } from '../../constants/Pages';

const Faq = () => {
  return (
    <S.Wrap>
      <S.Title>자주묻는 질문 (FAQ)</S.Title>
      <S.TabContainer>
        {FAQ_TAB_BUTTON.map((button) => {
          return button === 'NavTabButton' ? (
            <S.TabButton key={button}>{button}</S.TabButton>
          ) : (
            <S.TabButton key={button}>{button}</S.TabButton>
          );
        })}
      </S.TabContainer>
      <S.SearchBarForm>
        <S.Select>
          <S.Option>제목</S.Option>
          <S.Option>내용</S.Option>
        </S.Select>
        <S.Input htmlFor='search' />
        <S.SubmitButton>검색</S.SubmitButton>
      </S.SearchBarForm>
      <S.FaqListTitle>
        <S.FaqListTitlteContents>
          <div style={{ marginLeft: '2%', fontWeight: 600 }}>번호</div>
          <div style={{ marginLeft: '45%', fontWeight: 600 }}>제목</div>
        </S.FaqListTitlteContents>
      </S.FaqListTitle>
      <S.FaqList>
        {FAQ_LIST.map((li, i) => {
          return (
            <S.FaqListContents key={i} style={{ paddingLeft: '3%' }}>
              {i}
              <S.FaqListContents key={i} style={{ marginLeft: '5%' }}>
                {li}
              </S.FaqListContents>
            </S.FaqListContents>
          );
        })}
      </S.FaqList>
    </S.Wrap>
  );
};

export default Faq;
