import styled from 'styled-components';
import { Theme } from '../../style';

const ContainerDiv = styled.div`
  display: flex;
  background-color: ${Theme.PRIMARY.GREEN_LIGHT};
  margin-top: -1.5rem;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const FlexDiv = styled.div`
  width: 100%;
  display: grid;
  padding: 2rem;
  grid-template-columns: repeat(5, minmax(0, auto));
  @media screen and (max-width: 890px) {
    max-width: 100%;
    grid-template-columns: repeat(4, minmax(0, auto));
  }
  @media screen and (max-width: 780px) {
    max-width: 100%;
    grid-template-columns: repeat(3, minmax(0, auto));
  }
  @media screen and (max-width: 550px) {
    max-width: 100%;
    grid-template-columns: repeat(2, minmax(0, auto));
  }
`;

const LinkA = styled.a`
  text-decoration: none;
  :visited {
    color: ${Theme.PRIMARY.GREEN_DARK};
  }
  margin-bottom: 10px;
  padding-right: 3rem;
`;
export { ContainerDiv, FlexDiv, LinkA };
