import React, { useEffect, useState } from 'react';
import axios from 'api/axios';
import { USEREDIT_URL } from 'api';
import {
  Container,
  Formbox,
  NicknameInput,
  AboutInput,
  SubmitButton,
} from 'components/userEditModal/UserEditModal.style';

const UserEditModal = () => {
  const [userNickname, setUserNickname] = useState('');
  const [userAbout, setUserAbout] = useState('');

  const userEdit = () => {
    let accessToken = sessionStorage.getItem('Authorization');
    axios
      .patch(
        `${USEREDIT_URL}`,
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
    userEdit();
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Formbox onSubmit={userEdit}>
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

export default UserEditModal;
