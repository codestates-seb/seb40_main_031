import React, { useState } from 'react';
import { FaBars, FaReadme } from 'react-icons/fa';

import SearchBar from '../../@common/SearchBar/SearchBar';
import SingUpButton from '../../SingUpButton/SingUpButton';
import Modal from './modal/Modal';

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
            <SingUpButton title={'로그인'} />
          </S.Container>
        </S.LayoutContainer>
      </S.Wrap>
      {showModal === true ? <Modal list={'공지사항'} /> : null}
    </>
  );
};

export default Nav;
