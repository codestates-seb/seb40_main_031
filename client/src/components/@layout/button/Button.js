import React from 'react';
import { ButtonTemplate } from 'components/@layout/button/Button.style';

const Button = ({ text, width, height, ...rest }) => {
  return (
    <ButtonTemplate width={width} height={height} {...rest}>
      {text}
    </ButtonTemplate>
  );
};
export default Button;

{
  /* 사용 예시
   <Button text="같이 이야기하기" width="200px" height = "200px"/> */
}
