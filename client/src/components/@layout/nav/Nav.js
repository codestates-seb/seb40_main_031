import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { NAV_LIST, NAV_LIST_LOGINED } from 'constants';
import { useNavigate } from 'react-router-dom';

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
  const [navlist, setNavList] = useState([]);
  const [islogin, setIslogin] = useState(false);

  const navigate = useNavigate();

  const islogined = () => {
    sessionStorage.getItem('Authorization')
      ? setNavList(NAV_LIST_LOGINED)
      : setNavList(NAV_LIST);
    setIslogin(true);
  };

  const logout = () => {
    sessionStorage.removeItem('Authorization');
    sessionStorage.removeItem('Refresh');
    navigate('/login');
  };

  useEffect(() => {
    islogined();
  }, []);

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
          {navlist.map((list, idx) => {
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
          {islogin ? (
            <span>
              <ModalListA onClick={() => logout()}>로그아웃</ModalListA>
            </span>
          ) : null}
        </ModalWrapperDiv>
      </ModalDiv>
    </NavWrapperDiv>
  );
};

export default Nav;
