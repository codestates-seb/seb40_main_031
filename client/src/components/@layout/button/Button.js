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
