import React from 'react';
import * as S from './Review.style';
import { IoCloseOutline } from 'react-icons/io5';

const ModalReview = () => {
  return (
    <>
      <S.containerDiv>
        <S.headerDiv>
          <S.titleSpan>책제목</S.titleSpan>
          <S.closeIconSpan>
            <IoCloseOutline />
          </S.closeIconSpan>
        </S.headerDiv>

        <S.reviewTextarea
          type='text'
          placeholder='이 작품에 대한 생각을 자유롭게 표현해주세요.'
        />

        <S.footerDiv>Here comes Button{/*Button Component*/}</S.footerDiv>
      </S.containerDiv>
    </>
  );
};

export default ModalReview;
