import styled from 'styled-components';
import { Theme } from 'style';
import Carousel from 'components/main/MainCarousel';
import { darken } from 'polished';

const WrapperDiv = styled.div`
  width: 80%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SuggestDiv = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  padding: 1rem;
  @media screen and (max-width: 1090px) {
    flex-direction: column;
  }
`;

const SuggestTextDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50%;
  @media screen and (max-width: 1090px) {
    height: 40%;
    width: 100%;
  }
`;

const TextDiv = styled.div`
  font-size: 2rem;
  text-align: center;
  @media screen and (max-width: 1090px) {
    font-size: 3vw;
  }
`;

const SuggestBookListDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  @media screen and (max-width: 1090px) {
    height: 60%;
    width: 100%;
  }
`;

const BookCarouselDiv = styled(Carousel)`
  width: 90%;
`;

const TitleTextDiv = styled.div`
  padding-left: 4.5rem;
  font-size: 2.5rem;
  font-weight: 900;
  color: ${darken(0.3, Theme.PRIMARY.GREEN_DARK)};
`;

const ListContentsDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-top: 3rem;
`;

const ListDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export {
  WrapperDiv,
  SuggestDiv,
  SuggestTextDiv,
  SuggestBookListDiv,
  BookCarouselDiv,
  TitleTextDiv,
  TextDiv,
  ListContentsDiv,
  ListDiv,
};
