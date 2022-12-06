import React, { useState, useEffect } from 'react';
import axios from 'api/axios';
import { USERINFO_URL } from 'api';
import { useParams, useNavigate } from 'react-router-dom';
import { UserEditModal } from 'components';
import userIcon from 'img/user_profile_icon.png';

import {
  Wrap,
  UserContainer,
  UserInfoBox,
  UserIcon,
  ReadBookContainer,
  ReadBook,
  UserNickname,
  UserCount,
  UserNicknameFix,
  UserNicknameContainer,
  UserAbout,
  RecentReviews,
} from 'pages/userPage/UserPage.style';

const UserPage = () => {
  const [user, setUser] = useState([]);
  const { id } = useParams();
  const [modal, setModal] = useState(false);
  let userId = sessionStorage.getItem('UserId');

  const navigate = useNavigate();

  const getUserData = async () => {
    const res = await axios.get(`${USERINFO_URL}${id}`);
    setUser(res.data);
    return res.data;
  };

  const toggle = () => {
    setModal((modal) => !modal);
    return;
  };

  const handleClick = (e) => {
    navigate(`/bookdetail/${e}`);
  };

  useEffect(() => {
    getUserData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Wrap>
        <UserContainer>
          <UserCount>{user.data?.point} 포인트</UserCount>
        </UserContainer>
        <UserInfoBox>
          <UserIcon src={userIcon}></UserIcon>
          <UserNicknameContainer>
            <UserNickname>{user.data?.nickname}</UserNickname>
            <UserNicknameFix
              onClick={() => {
                toggle();
              }}
            >
              수정
            </UserNicknameFix>
          </UserNicknameContainer>
          <UserAbout>{user.data?.about}</UserAbout>
        </UserInfoBox>
        <div style={{ width: '100%' }}>
          <RecentReviews>최근 이런 책들을 읽었어요</RecentReviews>
        </div>
        <ReadBookContainer>
          {user.data?.bookList.slice(0, 3).map((book) => {
            return (
              <ReadBook
                key={book.bookId}
                src={book.coverLargeUrl}
                onClick={() => {
                  handleClick(`${book.bookId}`);
                }}
              ></ReadBook>
            );
          })}
        </ReadBookContainer>
      </Wrap>
      {modal === true ? <UserEditModal /> : null}
    </>
  );
};

export default UserPage;
