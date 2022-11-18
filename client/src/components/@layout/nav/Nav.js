import React, { useState } from 'react';
import { FaBars, FaReadme } from 'react-icons/fa';

import SearchBar from '../../@common/searchBar/SearchBar';
import SingUpButton from '../../signUpButton/SignUpButton';
import Modal from './modal/Modal';
import CustomLink from '../../@common/customLink/CustomLink';

import * as S from './Nav.style';

const Nav = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <S.Wrap>
        <S.LayoutContainer>
          <FaBars
            className='logo'
            onClick={() => {
              setShowModal(!showModal);
            }}
          />
          <FaReadme className='logo' style={{ marginLeft: '240px' }} />

          <S.Container>
            <SearchBar />

            <SingUpButton title={'회원가입'} />
            <CustomLink path='/login'>
              <SingUpButton title={'로그인'} />
            </CustomLink>
          </S.Container>
        </S.LayoutContainer>
      </S.Wrap>
      {showModal === true ? <Modal list={'공지사항'} /> : null}
    </>
  );
};

export default Nav;
