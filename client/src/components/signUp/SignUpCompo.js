import React from 'react';
import Button from '../@layout/button/Button';
import * as S from '../signUp/SignUpCompo.style';

const SignUpCompo = () => {
  return (
    <S.Container>
      <S.LogoDiv>
        함께 쓰는 리뷰,
        <br /> 이야기가 되어 모이다
      </S.LogoDiv>
      <S.SignUpInput placeholder='닉네임'></S.SignUpInput>
      <S.SignUpInput placeholder='이메일'></S.SignUpInput>
      <S.SignUpInput placeholder='비밀번호' type='password'></S.SignUpInput>
      <Button text='회원가입' width='150px' height='35px'></Button>
      <S.SignDiv>
        이미 가입하셨나요? <S.LinkA href='#'>로그인</S.LinkA>
      </S.SignDiv>
      <S.LineHr />
      <S.GoogleSvg
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
      </S.GoogleSvg>
    </S.Container>
  );
};

export default SignUpCompo;
