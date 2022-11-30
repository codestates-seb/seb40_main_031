import React from 'react';
import { FAQ_TAB_BUTTON } from 'constants';
import { FAQ_LIST } from 'constants';

import {
  Wrap,
  Title,
<<<<<<< HEAD
=======
  TabButton,
  TabContainer,
>>>>>>> 13832d7a851dcddb53654add4d12caca4f3f2295
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
      <Title>공지사항</Title>
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
