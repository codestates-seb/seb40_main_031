import React from 'react';
import { Wrap, ModalList } from 'components/@layout/nav/modal/Modal.stlye';
import { NAV_LIST } from 'constants';

const Modal = ({ list, ...rest }) => {
  return (
    <Wrap>
      {NAV_LIST.map((li) => {
        return li === 'nav' ? (
          <ModalList key={li}>{li}</ModalList>
        ) : (
          <ModalList key={li}>{li}</ModalList>
        );
      })}
    </Wrap>
  );
};

export default Modal;
