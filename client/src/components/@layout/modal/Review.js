import React from 'react';
import {
  ModalBackground,
  ContainerDiv,
  HeaderDiv,
  TitleSpan,
  CloseIconSpan,
  ReviewTextarea,
  FooterDiv,
} from 'components/@layout/modal/Review.style';
import { IoCloseOutline } from 'react-icons/io5';
import { Button } from 'components';
import { useRef } from 'react';

const ModalReview = ({ setModal }) => {
  const outside = useRef();

  const modalHandlered = () => {
    setModal(false);
  };

  return (
    <div>
      <ModalBackground
        ref={outside}
        onClick={(e) => {
          if (e.target === outside.current) setModal(false);
        }}
      >
        <ContainerDiv>
          <HeaderDiv>
            <TitleSpan>책제목</TitleSpan>
            <CloseIconSpan>
              <IoCloseOutline size='45' onClick={modalHandlered} />
            </CloseIconSpan>
          </HeaderDiv>

          <ReviewTextarea
            type='text'
            placeholder='이 작품에 대한 생각을 자유롭게 표현해주세요.'
          />

          <FooterDiv>
            <Button text='작성' width='200px' height='60px' />
          </FooterDiv>
        </ContainerDiv>
      </ModalBackground>
    </div>
  );
};

export default ModalReview;
