import React from 'react';
import { GridContainer, URLShareButton } from './Share.style';
import { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';

import { CopyToClipboard } from 'react-copy-to-clipboard';

const Share = ({ setOpenShare }) => {
  const currentUrl = window.location.href; // window 객체에서 현재 url 가져오기
  const closeHandler = () => {
    setOpenShare(false);
  };
  const alertMessage = () => {
    alert('주소가 복사되었습니다!');
  };

  return (
    <div>
      <GridContainer>
        <FacebookShareButton url={currentUrl}>
          <FacebookIcon size={40} round={true} borderRadius={24}></FacebookIcon>
        </FacebookShareButton>

        <TwitterShareButton url={currentUrl}>
          <TwitterIcon size={40} round={true} borderRadius={24}></TwitterIcon>
        </TwitterShareButton>

        <CopyToClipboard text={currentUrl}>
          <URLShareButton onClick={alertMessage}>
            <span>URL</span>
          </URLShareButton>
        </CopyToClipboard>
        <IoCloseOutline size='45' onClick={closeHandler} />
      </GridContainer>
    </div>
  );
};
export default Share;
