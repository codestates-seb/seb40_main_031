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
      setNicknameError('');
    } else {
      setIsNickname(false);
      setNicknameError('닉네임은 두글자 이상이어야 합니다.');
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

  const clickHandler = () => {
    navigate('/');
  };

  useEffect(() => {
    checkButton();
    // eslint-disable-next-line
  }, [isNickname, isEmail, isPassword]);

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
    </>
  );
};

export default SignUpComponent;
