import React from 'react';
import * as S from './SignUpButton.style';

const SingUpButton = ({ title }) => {
  return (
    <S.Wrap>
      <S.Button>{title}</S.Button>
    </S.Wrap>
  );
};

export default SingUpButton;
