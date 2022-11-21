import React from 'react';
import {
  containerDiv,
  headerDiv,
  titleSpan,
  closeIconSpan,
  reviewTextarea,
  footerDiv,
} from './Review.style';
import { IoCloseOutline } from 'react-icons/io5';

const ModalReview = () => {
  return (
    <>
      <containerDiv>
        <headerDiv>
          <titleSpan>책제목</titleSpan>
          <closeIconSpan>
            <IoCloseOutline />
          </closeIconSpan>
        </headerDiv>

        <reviewTextarea
          type='text'
          placeholder='이 작품에 대한 생각을 자유롭게 표현해주세요.'
        />

        <footerDiv>Here comes Button{/*Button Component*/}</footerDiv>
      </containerDiv>
    </>
  );
};

export default ModalReview;
