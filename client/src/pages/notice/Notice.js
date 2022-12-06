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
} from './Notice.style';

const Notice = () => {
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
      <Title>공지사항 (Notice)</Title>
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
          <FaqHeaderDiv>
            도서 관련 정보 공유 웹 서비스, 글길 런칭 안내
          </FaqHeaderDiv>
          <FaqBodyDiv className={classNames1}>
            2022.12.07 수요일 도서 커뮤니티 글길이 오픈하였습니다. 많은 관심
            부탁드립니다.
          </FaqBodyDiv>
        </FaqListContents>
        <FaqListContents
          onClick={(e) => {
            openHandler2(e);
          }}
          className={classNames2}
        >
          <FaqHeaderDiv>`{'같이 이야기하기'}`가 눈길에 막혔어요</FaqHeaderDiv>
          <FaqBodyDiv className={classNames2}>
            현재 같이 이야기하기 채팅방으로 가는 길에 폭설이 내려 접근하실 수
            없어요. 빠른 시일 내 제설 완료 후 돌아올게요!
          </FaqBodyDiv>
        </FaqListContents>
        <FaqListContents
          onClick={(e) => {
            openHandler3(e);
          }}
          className={classNames3}
        >
          <FaqHeaderDiv>아마존, 교보문고, 인터파크, 알라딘 제휴</FaqHeaderDiv>
          <FaqBodyDiv className={classNames3}>
            ...하고 싶어요! 많이 이용해주세요!
          </FaqBodyDiv>
        </FaqListContents>
      </FaqList>
    </Wrap>
  );
};

export default Notice;
