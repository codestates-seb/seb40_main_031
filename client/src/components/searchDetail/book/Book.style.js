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
  display: grid;
  grid-template-columns: repeat(3, minmax(0, auto));
  max-width: 1000px;
  margin-bottom: 5rem;
  @media screen and (max-width: 1000px) {
    max-width: 100%;
    grid-template-columns: repeat(3, minmax(0, auto));
  }
  @media screen and (max-width: 950px) {
    max-width: 100%;
    grid-template-columns: repeat(2, minmax(0, auto));
  }
  @media screen and (max-width: 610px) {
    max-width: 100%;
    grid-template-columns: repeat(1, minmax(0, auto));
  }
  span {
    margin-bottom: 30px;
  }
`;

const Img = styled.img`
  width: 280px;
  height: 400px;
  margin: 5px;
  cursor: pointer;
`;

const TitleMini = styled.div`
  display: inline-block;
  width: 100%;
  font-size: 20px;
  max-width: 200px;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BookSpan = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 950px) {
    max-width: 100%;
    margin-left: 3rem;
    margin-right: 3rem;
    grid-template-columns: repeat(2, minmax(0, auto));
  }
  @media screen and (max-width: 610px) {
    max-width: 100%;
    margin-left: 3rem;
    margin-right: 3rem;
    grid-template-columns: repeat(1, minmax(0, auto));
  }
`;

export { Container, Bookbox, Img, Title, TitleMini, BookSpan };
