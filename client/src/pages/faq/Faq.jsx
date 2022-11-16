import React from 'react';
import * as S from './Faq.style';

import { FAQ_TAB_BUTTON } from '../../constants/Pages';

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
    </S.Wrap>
  );
};

export default Faq;
