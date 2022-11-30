import React from 'react';

import {
  Wrap,
  LayoutContainer,
  UpperContainerDiv,
  LinkA,
  LinkDiv,
  LowerContainerDiv,
  LogoImg,
  CopyrightCSDiv,
  CopyrightDiv,
  CustomerServiceDiv,
  SocialDiv,
  LinkToA,
} from 'components/@layout/footer/Footer.style';
import { FaGithub, FaInstagramSquare } from 'react-icons/fa';
import { RiKakaoTalkFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <Wrap>
      <LayoutContainer>
        <UpperContainerDiv>
          <ul>
            <li>
              <div>MANAGER</div>
              <LinkA href='https://github.com/rosenfence'>신창하</LinkA>
            </li>
            <li>
              <div>FRONTEND TEAM</div>
              <LinkA href='https://github.com/nahoyeon'>나호연</LinkA>
              <LinkA href='https://github.com/tyuiop3762'>조원태</LinkA>
              <LinkA href='https://github.com/js-ha'>하지수</LinkA>
            </li>
            <li>
              <div>BACKEND TEAM</div>
              <LinkA href='https://github.com/paquantum'>박민우</LinkA>
              <LinkA href='https://github.com/domadoes'>제민혜</LinkA>
            </li>
          </ul>
          <LinkDiv>
            <SocialDiv>
              <LinkToA href='https://github.com/codestates-seb/seb40_main_031'>
                <FaGithub />
              </LinkToA>
              <LinkToA href='http://pf.kakao.com/_xexaxePxj'>
                <RiKakaoTalkFill />
              </LinkToA>
              <LinkToA>
                <FaInstagramSquare />
              </LinkToA>
            </SocialDiv>
          </LinkDiv>
        </UpperContainerDiv>
        <LowerContainerDiv>
          <LogoImg src='./img/imgLogo2.svg' className='big' />
          <LogoImg src='./img/ico.png' className='small' />
          <CopyrightCSDiv>
            <CopyrightDiv>
              © 2022 by GULGIL, Inc. All rights reserved.
            </CopyrightDiv>
            <CustomerServiceDiv>
              <LinkToA href='http://pf.kakao.com/_xexaxePxj/chat'>
                문의상담
              </LinkToA>
              <LinkToA href='http://pf.kakao.com/_xexaxePxj/chat'>
                광고문의
              </LinkToA>
            </CustomerServiceDiv>
          </CopyrightCSDiv>
        </LowerContainerDiv>
      </LayoutContainer>
    </Wrap>
  );
};

export default Footer;
