import React, { useState } from 'react';
import { FaBars, FaReadme } from 'react-icons/fa';

import SearchBar from 'components/@common/searchBar/SearchBar';
import SignUpButton from 'components/@layout/nav/signUpButton/SignUpButton';
import Modal from 'components/@layout/nav/modal/Modal';
import CustomLink from 'components/@common/customLink/CustomLink';

import {
  Wrap,
  Container,
  LayoutContainer,
} from 'components/@layout/nav/Nav.style';

const Nav = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Wrap>
        <LayoutContainer>
          <FaBars
            className='logo'
            onClick={() => {
              setShowModal(!showModal);
            }}
          />
          <FaReadme className='logo' style={{ marginLeft: '240px' }} />

          <Container>
            <SearchBar />

            <SignUpButton title={'회원가입'} />
            <CustomLink path='/login'>
              <SignUpButton title={'로그인'} />
            </CustomLink>
          </Container>
        </LayoutContainer>
      </Wrap>
      {showModal === true ? <Modal list={'공지사항'} /> : null}
    </>
  );
};

export default Nav;
