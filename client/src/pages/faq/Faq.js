import React, { useState, useEffect } from 'react';

import {
  Wrap,
  Title,
  FaqList,
  FaqListTitle,
  FaqListTitlteContents,
  FaqListContents,
  FaqHeaderDiv,
  FaqBodyDiv,
} from 'pages/notice/Notice.style';

const Faq = () => {
  const [classNames1, setClassNames1] = useState('');
  const [classNames2, setClassNames2] = useState('');
  const [classNames3, setClassNames3] = useState('');
  const [slidedown1, setSlidedown1] = useState(false);
  const [slidedown2, setSlidedown2] = useState(false);
  const [slidedown3, setSlidedown3] = useState(false);

  const openHandler1 = () => {
    setSlidedown1((slidedown1) => !slidedown1);
  };
  const openHandler2 = () => {
    setSlidedown2((slidedown2) => !slidedown2);
  };
  const openHandler3 = () => {
    setSlidedown3((slidedown3) => !slidedown3);
  };

  useEffect(() => {
    setClassNames1(`${slidedown1 ? 'opened' : ''}`);
  }, [slidedown1]);
  useEffect(() => {
    setClassNames2(`${slidedown2 ? 'opened' : ''}`);
  }, [slidedown2]);
  useEffect(() => {
    setClassNames3(`${slidedown3 ? 'opened' : ''}`);
  }, [slidedown3]);

  return (
    <Wrap>
      <Title>자주 묻는 질문 (FAQ)</Title>
      <FaqListTitle>
        <FaqListTitlteContents>
          <div style={{ marginLeft: '45%', fontWeight: 600 }}></div>
        </FaqListTitlteContents>
      </FaqListTitle>
      <FaqList>
        <FaqListContents
          onClick={(e) => {
            openHandler1(e);
          }}
          className={classNames1}
        >
          <FaqHeaderDiv>포인트는 어떻게 적립하나요?</FaqHeaderDiv>
          <FaqBodyDiv className={classNames1}>
            작성한 리뷰 당 포인트 10점이 적립됩니다.
            <br />
            작성한 리뷰를 삭제하실 시 적립된 포인트는 반환됩니다.
          </FaqBodyDiv>
        </FaqListContents>
        <FaqListContents
          onClick={(e) => {
            openHandler2(e);
          }}
          className={classNames2}
        >
          <FaqHeaderDiv>채팅상담은 언제 가능한가요?</FaqHeaderDiv>
          <FaqBodyDiv className={classNames2}>
            월요일부터 금요일 9시 ~ 18시까지 운영합니다.
            <br />
            문의가 많을 시 상담이 지연될 수 있습니다.
          </FaqBodyDiv>
        </FaqListContents>
        <FaqListContents
          onClick={(e) => {
            openHandler3(e);
          }}
          className={classNames3}
        >
          <FaqHeaderDiv>로그인을 안 하면 이용이 불가능한가요?</FaqHeaderDiv>
          <FaqBodyDiv className={classNames3}>
            로그인하지 않으셔도 도서 검색 및 리뷰 조회는 가능합니다.
            <br />
            회원가입시에는 리뷰 작성 및 포인트 지급, 읽은 책 리스트 조회 등 더욱
            다양한 서비스를 이용하실 수 있습니다.
          </FaqBodyDiv>
        </FaqListContents>
      </FaqList>
    </Wrap>
  );
};

export default Faq;
