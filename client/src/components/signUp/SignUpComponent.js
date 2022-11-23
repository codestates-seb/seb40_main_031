import React, { useState } from 'react';
import { Button } from 'components/@layout';
import {
  Container,
  SignUpInput,
  LogoImg,
  SignDiv,
  LinkA,
  LineHr,
  GoogleSvg,
  CommentDiv,
} from 'components/signUp/SignUpComponent.style';
import axios from 'api/axios';
import { SIGNUP_URL } from 'api';

const SignUpComponent = () => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //유효성 검사
  const [isNickname, setIsNickname] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  const check = (data, type) => {
    if (type === 'nickname') {
      if (data.length >= 2) {
        return true;
      } else return false;
    }
    if (type === 'email') {
      const emailRegex =
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

      return emailRegex.test(data);
    }
    if (type === 'password') {
      const passwordRegex = /(?=.*[0-9])(?=.*[a-z])(?=.*\W)(?=\S+$).{8,16}/; // 무조건 하나이상은 들어가야된다 // 공백허용안한다
      return passwordRegex.test(data);
    }
  };

  const handleNickname = (event) => {
    if (check(event.target.value, 'nickname')) {
      setIsNickname(true);
    } else {
      setIsNickname(false);
    }
    setNickname(event.target.value);
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
    if (check(event.target.value, 'password')) {
      setIsPassword(true);
    } else {
      setIsPassword(false);
    }
    setPassword(event.target.value);
    console.log(password);
  };

  const submitHandle = async () => {
    console.log(`${nickname}, ${email}, ${password}`);
    await axios
      .post(SIGNUP_URL, {
        nickname: nickname,
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.status === 201) {
          console.log('회원가입 성공');
          console.log(res);
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          console.log('401 에러');
          console.log(err);
        } else {
          console.log(`${err.response.status} 에러`);
          console.log(err);
        }
      });
  };

  return (
    <Container>
      <LogoImg src='/img/imgLogo.svg' />
      <SignUpInput
        placeholder='닉네임'
        value={nickname}
        onChange={handleNickname}
        style={isNickname ? {} : { border: '1px solid red' }}
      ></SignUpInput>
      {isNickname ? null : (
        <CommentDiv>닉네임은 두글자 이상이어야 합니다.</CommentDiv>
      )}
      <SignUpInput
        placeholder='이메일'
        value={email}
        onChange={handleEmail}
        style={isEmail ? {} : { border: '1px solid red' }}
      ></SignUpInput>
      {isEmail ? null : <CommentDiv>올바른 이메일을 입력해주세요.</CommentDiv>}
      <SignUpInput
        placeholder='비밀번호'
        value={password}
        type='password'
        onChange={handlePassword}
        style={isPassword ? {} : { border: '1px solid red' }}
      ></SignUpInput>
      {isPassword ? null : (
        <CommentDiv>
          비밀번호는 숫자, 소문자, 특수문자를 포함하여 8글자 이상이어야 합니다.
        </CommentDiv>
      )}
      <Button text='회원가입' width='150px' height='35px'></Button>
      <button onClick={submitHandle}>회원가입</button>
      <SignDiv>
        이미 가입하셨나요? <LinkA href='#'>로그인</LinkA>
      </SignDiv>
      <LineHr />
      <GoogleSvg
        aria-hidden='true'
        className='native svg-icon iconGoogle'
        width='30'
        height='30'
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
      </GoogleSvg>
    </Container>
  );
};

export default SignUpComponent;
