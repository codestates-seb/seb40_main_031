import styled from 'styled-components';
import { Theme } from 'style';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  div {
    text-align: center;
  }
`;

const Title = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 25px;
  margin-left: 3.5rem;
  color: ${Theme.PRIMARY.GREEN};
`;

const Bookbox = styled.div`
  /* padding: 20px; */
  display: grid;
  grid-template-columns: repeat(4, minmax(0, auto));
  max-width: 1000px;
  @media screen and (max-width: 1000px) {
    max-width: 100%;
    grid-template-columns: repeat(3, minmax(0, auto));
  }
  @media screen and (max-width: 800px) {
    max-width: 100%;
    grid-template-columns: repeat(2, minmax(0, auto));
  }
  span {
    margin-bottom: 30px;
  }
`;

const Img = styled.img`
  width: 85%;
  margin: 5px;
`;

export { Container, Bookbox, Img, Title };
