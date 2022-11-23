import React, { useState } from 'react';
import { FaBars, FaReadme } from 'react-icons/fa';

import SearchBar from 'components/@common/searchBar/SearchBar';
import SignUpButton from 'components/@layout/nav/signUpButton/SignUpButton';
import Modal from 'components/@layout/nav/modal/Modal';
import CustomLink from 'components/@common/customLink/CustomLink';

import {
  NavWrapperDiv,
  LeftDiv,
  LayoutContainer,
  MainLogoImg,
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
      {showModal === true ? <Modal list={'공지사항'} /> : null}
    </NavWrapperDiv>
  );
};

export default Nav;
