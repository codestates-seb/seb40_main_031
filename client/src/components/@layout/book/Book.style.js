import styled from 'styled-components';

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
`;

const Bookbox = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, auto));
  max-width: 900px;
  @media screen and (max-width: 810px) {
    max-width: 100%;
    grid-template-columns: repeat(4, minmax(0, auto));
  }
  @media screen and (max-width: 660px) {
    max-width: 100%;
    grid-template-columns: repeat(3, minmax(0, auto));
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
