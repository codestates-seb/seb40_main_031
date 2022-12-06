import React, { useState, useEffect } from 'react';
import axios from 'api/axios';
import { USERINFO_URL } from 'api';
import { useParams } from 'react-router-dom';
import { UserEditModal } from 'components';

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

  const getUserData = async () => {
    const res = await axios.get(`${USERINFO_URL}${id}`);
    setUser(res.data);
    return res.data;
  };

  const toggle = () => {
    setModal((modal) => !modal);
    return;
  };

  useEffect(() => {
    getUserData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Wrap>
        <UserContainer>
          <UserCount>포인트 {user.data?.point}</UserCount>
        </UserContainer>
        <UserInfoBox>
          <UserIcon>{user.data?.img}</UserIcon>
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
        <RecentReviews>저는 최근 이런책을 읽었어요</RecentReviews>
        <ReadBookContainer>
          {user.data?.bookList.slice(0, 3).map((book) => {
            return (
              <ReadBook key={book.bookId} src={book.coverLargeUrl}></ReadBook>
            );
          })}
        </ReadBookContainer>
      </Wrap>
      {modal === true ? <UserEditModal /> : null}
    </>
  );
};

export default UserPage;
