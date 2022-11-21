import React from 'react';
import {
  ContainerDiv,
  HeaderDiv,
  TitleSpan,
  CloseIconSpan,
  ReviewTextarea,
  FooterDiv,
} from 'components/@layout/modal/Review.style';
import { IoCloseOutline } from 'react-icons/io5';

const ModalReview = () => {
  return (
    <ContainerDiv>
      <HeaderDiv>
        <TitleSpan>책제목</TitleSpan>
        <CloseIconSpan>
          <IoCloseOutline />
        </CloseIconSpan>
      </HeaderDiv>

      <ReviewTextarea
        type='text'
        placeholder='이 작품에 대한 생각을 자유롭게 표현해주세요.'
      />

      <FooterDiv>Here comes Button{/*Button Component*/}</FooterDiv>
    </ContainerDiv>
  );
};

export default ModalReview;
