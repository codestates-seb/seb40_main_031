import React, { useState, useEffect } from 'react';

import axios from 'api/axios';
import { USERINFO_URL } from 'api';
import { useParams } from 'react-router-dom';

import {
  Wrap,
  UserContainer,
  UserInfoBox,
  UserIcon,
  ReadBookContainer,
  ReadBook,
} from './UserPage.style';

const UserPage = () => {
  const [user, setUser] = useState([]);
  let { userUrlId } = useParams();

  console.log(userUrlId);

  const userId = sessionStorage.getItem('UserId');

  const getUserData = async () => {
    const res = await axios.get(`${USERINFO_URL}`);
    setUser(res.data);
    return res.data;
  };

  console.log(userUrlId);
  useEffect(() => {
    getUserData();
  }, []);

  console.log(user.data);
  return (
    <Wrap>
      <UserContainer>{userId}</UserContainer>
      <UserInfoBox>
        <UserIcon />
      </UserInfoBox>
      <ReadBookContainer>
        {/* 맵으로 돌릴예정 */}
        <ReadBook></ReadBook>
      </ReadBookContainer>
    </Wrap>
  );
};

export default UserPage;
