import React, { useEffect, useState } from 'react';
import axios from 'api/axios';
import { USEREDIT_URL } from 'api';
import {
  Container,
  Formbox,
  NicknameInput,
  AboutTextarea,
  SubmitButton,
} from 'components/userEditModal/UserEditModal.style';
import { useNavigate } from 'react-router-dom';

const UserEditModal = () => {
  const [userNickname, setUserNickname] = useState('');
  const [userAbout, setUserAbout] = useState('');

  const navigate = useNavigate();

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
        />
        자기소개
        <AboutTextarea
          name='about'
          value={userAbout}
          onChange={(e) => {
            setUserAbout(e.target.value);
            console.log(userAbout);
          }}
        />
        <div
          style={{
            display: 'flex',
            width: '40%',
            justifyContent: 'space-around',
          }}
        >
          <SubmitButton type='submit' value='수정'>
            수정
          </SubmitButton>
          <SubmitButton>닫기</SubmitButton>
        </div>
      </Formbox>
    </Container>
  );
};

export default UserEditModal;
