import React from 'react';
import { Wrap, Button } from './SignUpButton.style';

const SingUpButton = ({ title }) => {
  return (
    <Wrap>
      <Button>{title}</Button>
    </Wrap>
  );
};

export default SingUpButton;
