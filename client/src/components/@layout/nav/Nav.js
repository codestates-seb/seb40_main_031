import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { NAV_LIST, NAV_LIST_LOGINED } from 'constants';
import { useNavigate } from 'react-router-dom';
import axios from 'api/axios';

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
  RightDiv,
  UserImg,
  UserNameSpan,
} from 'components/@layout/nav/Nav.style';
import { USERINFO_URL } from 'api';

const Nav = () => {
  const [showModal, setShowModal] = useState(false);
  const [navlist, setNavList] = useState([]);
  const [islogin, setIslogin] = useState(false);
  const [userName, setUserName] = useState('기본값');
  const [userImg, setUserImg] = useState(
    'https://cdn.icon-icons.com/icons2/2761/PNG/512/user_profile_icon_176439.png',
  );

  const navigate = useNavigate();

  const getUserInfo = () => {
    const userId = sessionStorage.getItem('UserId');
    if (userId !== null) {
      axios
        .get(`${USERINFO_URL}${userId}`)
        .then((res) => {
          setUserName(res.data.data.nickname);
          res.data.data.img !== null ? setUserImg(res.data.data.img) : null;
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return null;
    }
  };

  const islogined = () => {
    if (sessionStorage.getItem('Authorization') !== null) {
      setNavList(NAV_LIST_LOGINED);
      setIslogin(true);
    } else {
      setNavList(NAV_LIST);
      setIslogin(false);
    }
  };

  const logout = () => {
    sessionStorage.clear();
    navigate('/login');
  };

  useEffect(() => {
    islogined();
    getUserInfo();
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
        <RightDiv>
          <SearchBar />
          {islogin ? (
            <UserNameSpan onClick={() => navigate('/userpage')}>
              {userName}
            </UserNameSpan>
          ) : null}
          {islogin ? (
            <UserImg onClick={() => navigate('/userpage')} src={userImg} />
          ) : null}
        </RightDiv>
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
