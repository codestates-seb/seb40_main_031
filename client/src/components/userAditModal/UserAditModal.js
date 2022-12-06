import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';
import { USEREDTI_URL } from 'api';
import {
  Container,
  Formbox,
  NicknameInput,
  AboutInput,
  SubmitButton,
} from './UserAditModal.stlye';

const UserAditModal = () => {
  const [userNickname, setUserNickname] = useState('');
  const [userAbout, setUserAbout] = useState('');

  const userAdit = () => {
    let accessToken = sessionStorage.getItem('Authorization');

    axios
      .patch(
        `${USEREDTI_URL}`,
        {
          nickname: userNickname,
          about: userAbout,
        },
        {
          headers: {
            Authorization: accessToken,
          },
        },
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    userAdit();
  }, []);

  return (
    <Container>
      <Formbox onSubmit={userAdit}>
        닉네임
        <NicknameInput
          name='nickname'
          value={userNickname}
          onChange={(e) => {
            setUserNickname(e.target.value);
            console.log(userNickname);
          }}
        ></NicknameInput>
        자기소개
        <AboutInput
          name='about'
          value={userAbout}
          onChange={(e) => {
            setUserAbout(e.target.value);
            console.log(userAbout);
          }}
        ></AboutInput>
        <SubmitButton type='submit' value='수정'>
          수정
        </SubmitButton>
      </Formbox>
    </Container>
  );
};

export default UserAditModal;
