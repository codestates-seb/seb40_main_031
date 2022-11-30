import React, { useEffect, useState } from 'react';
import axios from 'api/axios';
import { useNavigate } from 'react-router-dom';
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
import { AlertModal } from 'components';
import { LOGIN_URL } from 'api';
import { ROUTES } from 'constants';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');

  const [isEmail, setIsEmail] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const [alert, setAlert] = useState({
    open: false,
    title: '',
    message: '',
    callback: false,
  });

  const navigate = useNavigate();

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
      setEmailError('');
    } else {
      setIsEmail(false);
      setEmailError('올바른 이메일을 입력해주세요.');
    }
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const submitHandle = () => {
    console.log(`${email}, ${password}`);
    axios
      .post(LOGIN_URL, {
        email: email,
        password: password,
      })
      .then((res) => {
        let accessToken = res.headers.get('Authorization');
        let refreshToken = res.headers.get('Refresh');
        let userId = res.data;

        sessionStorage.setItem('Authorization', accessToken);
        sessionStorage.setItem('Refresh', refreshToken);
        sessionStorage.setItem('UserId', userId);
        console.log(res);
        navigate('/');
      })
      .catch((err) => {
        console.log(`${err.response.status} 에러`);
        console.log(err);
        setAlert({
          open: true,
          title: '로그인 실패',
          message: '로그인에 실패했습니다. 관리자에게 문의해주세요.',
        });
      });
  };

  const checkButton = () => {
    isEmail
      ? password !== ''
        ? setIsSubmit(true)
        : setIsSubmit(false)
      : setIsSubmit(false);
  };

  const checkLogin = () => {
    sessionStorage.getItem('Authorization')
      ? setAlert({
          open: true,
          title: '오류',
          message: '잘못된 접근입니다. 메인 화면으로 이동합니다.',
          callback: function () {
            navigate('/');
          },
        })
      : null;
  };

  const clickHandler = () => {
    navigate('/');
  };

  useEffect(() => {
    checkButton();
    // eslint-disable-next-line
  }, [isEmail, password]);

  useEffect(() => {
    checkLogin();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <AlertModal
        open={alert.open}
        setPopup={setAlert}
        message={alert.message}
        title={alert.title}
        callback={alert.callback}
      />
      <WrapperDiv>
        <LogoImg src='/img/imgLogo.svg' onClick={() => clickHandler()} />
        <LoginInput
          placeholder='이메일'
          value={email}
          onChange={handleEmail}
          style={emailError === '' ? {} : { border: '1px solid red' }}
        ></LoginInput>
        <CommentDiv>{emailError}</CommentDiv>
        <LoginInput
          placeholder='비밀번호'
          type='password'
          value={password}
          onChange={handlePassword}
        ></LoginInput>
        <LoginButton
          className={!isSubmit ? 'unvaild' : ''}
          text='로그인'
          width='150px'
          height='35px'
          onClick={submitHandle}
        ></LoginButton>
        <LinkToSignUpDiv>
          계정이 없으신가요?
          <LinkA href={ROUTES.SIGNUP.path}>회원가입</LinkA>
        </LinkToSignUpDiv>
      </WrapperDiv>
    </>
  );
};

export default LoginComponent;
