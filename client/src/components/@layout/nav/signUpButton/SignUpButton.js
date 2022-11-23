import React from 'react';
import {
  Wrap,
  Button,
} from 'components/@layout/nav/signUpButton/SignUpButton.style';

const SignUpButton = ({ title }) => {
  return (
    <Wrap>
      <Button>{title}</Button>
    </Wrap>
  );
};

export default SignUpButton;
