import React, { useState, useEffect } from 'react';

import axios from 'api/axios';
import { USEREDTI_URL, USERINFO_URL } from 'api';
import { useParams } from 'react-router-dom';
import UserAditModal from '../../components/userAditModal/UserAditModal';

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
  UserNicknameFix,
  UserNicknameContainer,
  UserAbout,
} from './UserPage.style';

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

  const togle = () => {
    setModal((modal) => !modal);
    return;
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
          <UserNicknameContainer>
            <UserNickname>{user.data?.nickname}</UserNickname>
            <UserNicknameFix
              onClick={() => {
                togle();
              }}
            >
              수정
            </UserNicknameFix>
          </UserNicknameContainer>
          <UserAbout>{user.data?.about}</UserAbout>
        </UserInfoBox>
        <ReadBookContainer>
          {user.data?.bookList.slice(0, 2).map((book) => {
            return (
              <ReadBook key={book.bookId} src={book.coverLargeUrl}></ReadBook>
            );
          })}
        </ReadBookContainer>
      </Wrap>
      {modal === true ? <UserAditModal /> : null}
    </>
  );
};

export default UserPage;
