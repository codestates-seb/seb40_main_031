import styled from 'styled-components';
import { Theme } from 'style';
import { lighten, darken } from 'polished';

const Wrap = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: 50px 50px 50px;
  grid-template-columns: 150px;

  width: 100%;
  max-width: 1200px;
  height: 200px;
  background: linear-gradient(
    to bottom,
    ${Theme.PRIMARY.GREEN},
    ${Theme.PRIMARY.WHITE}
  );
  padding: 2rem 3rem 0 8rem;
`;

const ModalListA = styled.a`
  font-size: 1.5rem;
  padding-bottom: 1rem;
  text-decoration: none;
  color: ${darken(0.3, Theme.PRIMARY.GREEN_DARK)};
`;

export { Wrap, ModalListA };
