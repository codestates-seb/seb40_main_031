import React, { useRef, useEffect, useState } from 'react';
import {
  ModalBackground,
  ContainerDiv,
  HeaderDiv,
  TitleSpan,
  CloseIconSpan,
  ReviewTextarea,
  FooterDiv,
  ErrorSpan,
  LengthSpan,
} from 'components/@layout/modal/Review.style';
import { IoCloseOutline } from 'react-icons/io5';
import { Button } from 'components';
import { useParams } from 'react-router-dom';
import axios from 'api/axios';
import { REVIEW_URL } from 'api';

const ModalReview = ({ setModal, bookdetails }) => {
  const outside = useRef();
  const [content, setContent] = useState('');
  const [contentLength, setContentLength] = useState(0);
  const [isValid, setIsValid] = useState(false);
  const [isError, setIsError] = useState('');

  const contentHandler = (e) => {
    setContent(e.target.value);
  };

  const contentValidate = () => {
    setContentLength(content.length);
  };

  const contentLengthValidate = () => {
    contentLength >= 20 ? setIsValid(true) : setIsValid(false);
  };

  const modalHandlered = () => {
    setModal(false);
  };

  const { id } = useParams();

  const makeReviewHandler = () => {
    let accessToken = sessionStorage.getItem('Authorization');
    axios
      .post(
        `${REVIEW_URL}/${id}`,
        {
          content: content,
        },
        {
          headers: {
            Authorization: accessToken,
          },
        },
      )
      .then((res) => {
        console.log(res);
        setModal(false);
      })
      .then(() => window.location.reload())
      .catch((err) => {
        console.log(err.response.status);
        setIsError(
          `오류가 발생했어요. 관리자에게 문의해주세요. 오류 코드: ${err.response.status}`,
        );
      });
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

  useEffect(() => {
    contentValidate();
  }, [content]);

  useEffect(() => {
    contentLengthValidate();
  }, [contentLength]);

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
            <TitleSpan>{bookdetails.title}</TitleSpan>
            <CloseIconSpan>
              <IoCloseOutline size='45' onClick={modalHandlered} />
            </CloseIconSpan>
          </HeaderDiv>

          <ReviewTextarea
            type='text'
            placeholder='이 작품에 대한 생각을 자유롭게 표현해주세요.'
            onChange={contentHandler}
          />

          <FooterDiv>
            {isError !== '' ? <ErrorSpan>{isError}</ErrorSpan> : null}
            <LengthSpan
              className={isValid ? 'valid' : null}
            >{`${contentLength}/20`}</LengthSpan>
            <Button
              text='작성'
              width='200px'
              height='60px'
              onClick={makeReviewHandler}
              className={isValid ? null : 'unvaild'}
            />
          </FooterDiv>
        </ContainerDiv>
      </ModalBackground>
    </div>
  );
};

export default ModalReview;
