import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  SignUpInput,
  LogoImg,
  SignDiv,
  LinkA,
  LineHr,
  GoogleSvg,
  CommentDiv,
  SignupButton,
} from 'components/signUp/SignUpComponent.style';
import { AlertModal } from 'components';
import axios from 'api/axios';
import { SIGNUP_URL } from 'api';
import { ROUTES } from 'constants';

const SignUpComponent = () => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [nicknameError, setNicknameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  //유효성 검사
  const [isNickname, setIsNickname] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  const [isSubmit, setIsSubmit] = useState(false);

  const [alert, setAlert] = useState({
    open: false,
    title: '',
    message: '',
    callback: false,
  });

  const navigate = useNavigate();

  const check = (data, type) => {
    if (type === 'nickname') {
      if (data.length >= 2 && data.length <= 8) {
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
      setNicknameError('');
    } else {
      setIsNickname(false);
      setNicknameError('닉네임은 두글자 이상 여덟글자 이하여야 합니다.');
    }
    setNickname(event.target.value);
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
    if (check(event.target.value, 'password')) {
      setIsPassword(true);
      setPasswordError('');
    } else {
      setIsPassword(false);
      setPasswordError(
        '비밀번호는 숫자, 소문자, 특수문자를 포함하여 8글자 이상이어야 합니다.',
      );
    }
    setPassword(event.target.value);
  };

  const submitHandle = async () => {
    await axios
      .post(SIGNUP_URL, {
        nickname: nickname,
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.status === 201) {
          console.log('회원가입 성공');
          setAlert({
            open: true,
            title: '회원가입 완료',
            message: '회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.',
            callback: function () {
              navigate('/login');
            },
          });
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
        setAlert({
          open: true,
          title: '회원가입 실패',
          message: '회원가입에 실패했습니다. 관리자에게 문의해주세요.',
        });
      });
  };

  const checkButton = () => {
    isNickname
      ? isEmail
        ? isPassword
          ? setIsSubmit(true)
          : setIsSubmit(false)
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
  }, [isNickname, isEmail, isPassword]);

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
      <Container>
        <LogoImg src='/img/imgLogo.svg' onClick={() => clickHandler()} />
        <SignUpInput
          placeholder='닉네임'
          value={nickname}
          onChange={handleNickname}
          style={nicknameError === '' ? {} : { border: '1px solid red' }}
        ></SignUpInput>
        <CommentDiv>{nicknameError}</CommentDiv>
        <SignUpInput
          placeholder='이메일'
          value={email}
          onChange={handleEmail}
          style={emailError === '' ? {} : { border: '1px solid red' }}
        ></SignUpInput>
        <CommentDiv>{emailError}</CommentDiv>
        <SignUpInput
          placeholder='비밀번호'
          value={password}
          type='password'
          onChange={handlePassword}
          style={passwordError === '' ? {} : { border: '1px solid red' }}
        ></SignUpInput>
        <CommentDiv>{passwordError}</CommentDiv>
        <SignupButton
          className={!isSubmit ? 'unvaild' : ''}
          text='회원가입'
          width='150px'
          height='35px'
          onClick={submitHandle}
        ></SignupButton>
        <SignDiv>
          이미 가입하셨나요? <LinkA href={ROUTES.LOGIN.path}>로그인</LinkA>
        </SignDiv>
      </Container>
    </>
  );
};

export default SignUpComponent;
