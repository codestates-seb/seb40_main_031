import styled from 'styled-components';
import { Theme } from 'style';
import { Button } from 'react-bootstrap';

const CloseButton = styled(Button)`
  background-color: ${Theme.PRIMARY.GREEN};
  border: none;

  &:hover {
    background-color: ${Theme.PRIMARY.GREEN_DARK};
  }
`;

export { CloseButton };
