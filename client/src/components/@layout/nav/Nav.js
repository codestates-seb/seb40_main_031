import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { NAV_LIST, NAV_LIST_LOGINED } from 'constants';
import { useNavigate, useParams } from 'react-router-dom';
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
import logoImage from 'img/imgLogo2.svg';
import userIcon from 'img/user_profile_icon.png';

const Nav = () => {
  const [showModal, setShowModal] = useState(false);
  const [navlist, setNavList] = useState([]);
  const [islogin, setIslogin] = useState(false);
  const [userName, setUserName] = useState('기본값');
  const [userImg, setUserImg] = useState(userIcon);

  const navigate = useNavigate();
  const { userUrlId } = useParams();
  const userId = sessionStorage.getItem('UserId');

  console.log(userUrlId);

  const getUserInfo = () => {
    const userId = sessionStorage.getItem('UserId');
    axios
      .get(`${USERINFO_URL}${userId}`)
      .then((res) => {
        setUserName(res.data.data.nickname);
        res.data.data.img !== null ? setUserImg(res.data.data.img) : null;
      })
      .catch((err) => {
        console.log(err);
      });
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
            <MainLogoImg src={logoImage} />
          </CustomLink>
        </LeftDiv>
        <RightDiv>
          <SearchBar />
          {islogin ? (
            <UserNameSpan onClick={() => navigate(`/userpage/${userId}`)}>
              {userName}
            </UserNameSpan>
          ) : null}
          {islogin ? (
            <UserImg onClick={() => navigate('/userpage')} src={userIcon} />
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
