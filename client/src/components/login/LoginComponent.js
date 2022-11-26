import React, { useState } from 'react';
import { Button } from 'components/@layout';
import {
  WrapperDiv,
  LogoImg,
  LoginInput,
  LinkToSignUpDiv,
  LinkA,
  OAuthListDiv,
  OAuthSvg,
  LineHr,
  CommentDiv,
  LoginButton,
} from 'components/login/LoginComponent.style';
import axios from 'axios';
import { LOGIN_URL } from 'api';
import { ROUTES } from 'constants';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isEmail, setIsEmail] = useState(false);

  const check = (data, type) => {
    if (type === 'email') {
      const emailRegex =
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

      return emailRegex.test(data);
    }
  };

  const handleEmail = (event) => {
    if (check(event.target.value, 'email')) {
      setIsEmail(true);
    } else {
      setIsEmail(false);
    }
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const submitHandle = async () => {
    console.log(`${email}, ${password}`);
    await axios
      .post(LOGIN_URL, {
        email: email,
        password: password,
      })
      .then((res) => {
        let accessToken = res.headers.get('Authorization');
        let refreshToken = res.headers.get('Refresh');

        sessionStorage.setItem('Authorization', accessToken);
        sessionStorage.setItem('Refresh', refreshToken);
        console.log(res);
      })
      .catch((err) => {
        console.log(`${err.response.status} 에러`);
        console.log(err);
      });
  };

  return (
    <WrapperDiv>
      <LogoImg src='/img/imgLogo.svg' />
      <LoginInput
        placeholder='이메일'
        value={email}
        onChange={handleEmail}
        style={isEmail ? {} : { border: '1px solid red' }}
      ></LoginInput>
      {isEmail ? null : <CommentDiv>올바른 이메일을 입력해주세요.</CommentDiv>}
      <LoginInput
        placeholder='비밀번호'
        type='password'
        value={password}
        onChange={handlePassword}
      ></LoginInput>
      <LoginButton
        className={!isEmail ? 'unvaild' : ''}
        text='로그인'
        width='150px'
        height='35px'
        onClick={submitHandle}
      ></LoginButton>
      <LinkToSignUpDiv>
        계정이 없으신가요?
        <LinkA href={ROUTES.SIGNUP.path}>회원가입</LinkA>
      </LinkToSignUpDiv>
      <LineHr />
      <OAuthListDiv>
        <OAuthSvg
          aria-hidden='true'
          className='native svg-icon iconGoogle'
          width='18'
          height='18'
          viewBox='0 0 18 18'
        >
          <path
            d='M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18Z'
            fill='#4285F4'
          ></path>
          <path
            d='M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17Z'
            fill='#34A853'
          ></path>
          <path
            d='M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07Z'
            fill='#FBBC05'
          ></path>
          <path
            d='M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3Z'
            fill='#EA4335'
          ></path>
        </OAuthSvg>
      </OAuthListDiv>
    </WrapperDiv>
  );
};

export default LoginComponent;
