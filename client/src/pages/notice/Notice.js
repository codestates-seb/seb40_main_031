import React from 'react';
import { NOTICE_LIST } from 'constants/Pages';

import {
  Wrap,
  Title,
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
        {NOTICE_LIST.map((id, i) => {
          return (
            <FaqListContents key={i} style={{ paddingLeft: '3%' }}>
              <div
                style={{
                  marginRight: 25,
                }}
              >
                {id.id}
              </div>
              {id.text}
            </FaqListContents>
          );
        })}
      </FaqList>
    </Wrap>
  );
};

export default Notice;
