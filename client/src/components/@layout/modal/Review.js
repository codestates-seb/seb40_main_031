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
import { useRef, useEffect } from 'react';

const ModalReview = ({ setModal }) => {
  const outside = useRef();

  const modalHandlered = () => {
    setModal(false);
  };

  useEffect(() => {
    //모달창 화면이 처음에 랜더링이 되었을때
    document.body.style.cssText = `  
      position: fixed;  
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);
  //body 태그의 css를 position을 fixed로 변경하고,
  //top을 현재 스크롤 위치로 하고 overflow-y: scroll; width: 100%;을 추가
  //스크롤 방지
  //모달이 사라질 때에는 useEffect의 return을 사용해
  //body의 cssText를 리셋시킨 다음 window.scrollTo를 이용해 현재 스크롤 위치로 이동

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
