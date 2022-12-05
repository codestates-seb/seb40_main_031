import React, { useState, useEffect } from 'react';

import axios from 'api/axios';
import { USERINFO_URL } from 'api';
import { useParams } from 'react-router-dom';

// import UserReadBook from '../../components/searchDetail/book/UserReadBook';
import {
  Wrap,
  UserContainer,
  UserInfoBox,
  UserIcon,
  ReadBookContainer,
  ReadBook,
  UserNickname,
  UserCount,
} from './UserPage.style';

const UserPage = () => {
  const [user, setUser] = useState([]);
  const { id } = useParams();

  console.log(id);

  const userId = sessionStorage.getItem('UserId');

  const getUserData = async () => {
    const res = await axios.get(`${USERINFO_URL}${id}`);
    setUser(res.data);
    return res.data;
  };

  useEffect(() => {
    getUserData();
  }, []);

  console.log(user.data);

  return (
    <>
      <Wrap>
        <UserContainer>
          <UserCount>포인트 {user.data?.point}</UserCount>
        </UserContainer>
        <UserInfoBox>
          <UserIcon>{user.data?.img}</UserIcon>
          <UserNickname>{user.data?.nickname}</UserNickname>
        </UserInfoBox>
        <ReadBookContainer>
          {user.data?.bookList.map((_, i) => {
            return (
              <ReadBook
                key={i}
                name={user.bookList}
                src={user.data.bookList.coverSmallUrl}
              />
            );
          })}
        </ReadBookContainer>
      </Wrap>
    </>
  );
};

export default UserPage;
