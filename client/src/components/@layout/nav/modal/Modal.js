import React from 'react';
import * as S from './Modal.stlye';
import { NAV_LIST } from '../../../../constants/Pages';

const Modal = ({ list, ...rest }) => {
  return (
    <S.Wrap>
      {NAV_LIST.map((li) => {
        return li === 'nav' ? (
          <S.ModalList key={li}>{li}</S.ModalList>
        ) : (
          <S.ModalList key={li}>{li}</S.ModalList>
        );
      })}
    </S.Wrap>
  );
};

export default Modal;
