import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { NAV_LIST } from 'constants';

import SearchBar from 'components/@common/searchBar/SearchBar';
import CustomLink from 'components/@common/customLink/CustomLink';

import {
  NavWrapperDiv,
  LeftDiv,
  LayoutContainer,
  MainLogoImg,
  ModalDiv,
  ModalWrapperDiv,
  ModalListA,
} from 'components/@layout/nav/Nav.style';

const Nav = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <NavWrapperDiv>
      <LayoutContainer>
        <LeftDiv>
          <FaBars
            className='logo'
            onClick={() => {
              setShowModal(!showModal);
            }}
            style={{ cursor: 'pointer' }}
          />
          <CustomLink to='/'>
            <MainLogoImg src='./img/imgLogo2.svg' />
          </CustomLink>
        </LeftDiv>
        <SearchBar />
      </LayoutContainer>
      <ModalDiv>
        <ModalWrapperDiv className={showModal ? 'active' : 'hidden'}>
          {NAV_LIST.map((list, idx) => {
            return (
              <span key={idx}>
                <ModalListA
                  key={idx}
                  href={list.href}
                  target={list.name === '문의하기' ? '_blank' : '_self'}
                >
                  {list.name}
                </ModalListA>
              </span>
            );
          })}
        </ModalWrapperDiv>
      </ModalDiv>
    </NavWrapperDiv>
  );
};

export default Nav;
