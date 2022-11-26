import axios from 'axios';
import React, { useState, useEffect } from 'react';

import apiClient from 'api/axios';
import { getUser } from '../../api/user';

import {
  Wrap,
  UserContainer,
  UserInfoBox,
  UserIcon,
  ReadBookContainer,
  ReadBook,
} from './UserPage.style';

const UserPage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoding] = useState(false);
  const [error, setError] = useState(null);

  const fetchUser = async () => {
    try {
      setError(null);
      setUser(null);
      setLoding(true);
      const resposne = await axios.get(
        'https://e438-222-110-187-162.jp.ngrok.io/members/users',
      );
      setUser(resposne.data);
      console.log(resposne.data.data);
    } catch (e) {
      setError(e);
    }
    setLoding(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) return <div>loading..</div>;
  if (error) return <div>Erorr !</div>;

  // fetch('/userpage')
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));

  return (
    <Wrap>
      <UserContainer></UserContainer>
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
