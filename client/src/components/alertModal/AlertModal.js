import React from 'react';
import { Modal } from 'react-bootstrap';
import { CloseButton } from 'components/alertModal/AlertModal.style';

function AlertModal({ open, setPopup, message, title, callback }) {
  const handleClose = () => {
    setPopup({ open: false });
    if (callback) {
      callback();
    }
  };

  return (
    <>
      <Modal show={open} onHide={handleClose} style={{ marginTop: '50px' }}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <CloseButton variant='primary' onClick={handleClose}>
            확인
          </CloseButton>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AlertModal;
