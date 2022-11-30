import React from 'react';
import { FAQ_TAB_BUTTON } from 'constants';
import { FAQ_LIST } from 'constants';

import {
  Wrap,
  Title,
  TabButton,
  TabContainer,
  SearchBarForm,
  Select,
  Option,
  Input,
  SubmitButton,
  FaqList,
  FaqListTitle,
  FaqListTitlteContents,
  FaqListContents,
} from './Notice.style';

const Notice = () => {
  return (
    <Wrap>
      <Title>공지사항 (Notice)</Title>
      <FaqListTitle>
        <FaqListTitlteContents>
          <div style={{ marginLeft: '2%', fontWeight: 600 }}>번호</div>
          <div style={{ marginLeft: '45%', fontWeight: 600 }}>제목</div>
        </FaqListTitlteContents>
      </FaqListTitle>
      <FaqList>
        {FAQ_LIST.map((li, i) => {
          return (
            <FaqListContents key={i} style={{ paddingLeft: '3%' }}>
              {i}
              <FaqListContents key={i} style={{ marginLeft: '5%' }}>
                {li}
              </FaqListContents>
            </FaqListContents>
          );
        })}
      </FaqList>
    </Wrap>
  );
};

export default Notice;
