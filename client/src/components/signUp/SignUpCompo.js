import React from 'react';
import Button from '../@layout/button/Button';
import * as S from '../signUp/SignUpCompo.style';

const SignUpCompo = () => {
  return (
    <S.Container>
      <Button text='BookTalk' width='200px' height='30px'></Button>
      <S.SignUpInput placeholder='닉네임'></S.SignUpInput>
      <S.SignUpInput placeholder='이메일'></S.SignUpInput>
      <S.SignUpInput placeholder='비밀번호'></S.SignUpInput>
    </S.Container>
  );
};

export default SignUpCompo;
