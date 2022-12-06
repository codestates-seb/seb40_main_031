import React, { useState } from 'react';
import { FAQ_LIST } from 'constants/Pages';
import {
  Wrap,
  Title,
  FaqList,
  FaqListTitle,
  FaqListTitlteContents,
  FaqListContents,
} from 'pages/faq/Faq.style';

const Faq = () => {
  const [modal, setModal] = useState(false);

  const togle = () => {
    setModal((modal) => !modal);
    return;
  };

  return (
    <Wrap>
      <Title>자주묻는 질문 (FAQ)</Title>
      {/* <TabContainer>
        {FAQ_TAB_BUTTON.map((button) => {
          return button === 'NavTabButton' ? (
            <TabButton key={button}>{button}</TabButton>
          ) : (
            <TabButton key={button}>{button}</TabButton>
          );
        })}
      </TabContainer> */}
      {/* <SearchBarForm>
        <Select>
          <Option>제목</Option>
          <Option>내용</Option>
        </Select>
        <Input htmlFor='search' />
        <SubmitButton>검색</SubmitButton>
      </SearchBarForm> */}
      {/* 추후 리팩토링때 사용예정 */}
      <FaqListTitle>
        <FaqListTitlteContents>
          <div style={{ marginLeft: '2%', fontWeight: 600 }}>번호</div>
          <div style={{ marginLeft: '45%', fontWeight: 600 }}>제목</div>
        </FaqListTitlteContents>
      </FaqListTitle>
      <FaqList>
        {FAQ_LIST.map((id, i) => {
          return (
            <>
              <FaqListContents key={i} style={{ paddingLeft: '3%' }}>
                {id.id}

                <FaqListContents
                  style={{ marginLeft: '5%' }}
                  onClick={() => togle()}
                  key={i}
                >
                  {id.text}
                </FaqListContents>
              </FaqListContents>
            </>
          );
        })}
      </FaqList>
    </Wrap>
  );
};

export default Faq;
