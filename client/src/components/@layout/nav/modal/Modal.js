import React from 'react';
import { Wrap, ModalListA } from 'components/@layout/nav/modal/Modal.style';
import { NAV_LIST } from 'constants';

const Modal = () => {
  return (
    <Wrap>
      {NAV_LIST.map((list, idx) => {
        return (
          <span key={idx}>
            <ModalListA key={idx} href={list.href}>
              {list.name}
            </ModalListA>
          </span>
        );
      })}
    </Wrap>
  );
};

export default Modal;
