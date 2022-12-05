import styled from 'styled-components';
import { Theme } from 'style';
import { darken, lighten } from 'polished';

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
  font-size: 1.6rem;
  text-align: center;
  color: ${darken(0.15, '#febd5a')};
  @media screen and (max-width: 1090px) {
    font-size: calc(10px + 1.7vw);
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

const TitleTextDiv = styled.div`
  padding-top: 3rem;
  padding-left: 4.5rem;
  font-size: 2.7rem;
  font-weight: 900;
  color: ${lighten(0.1, Theme.PRIMARY.GREEN)};
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

const DistanceDiv = styled.div`
  margin-bottom: 6rem;
`;
export {
  WrapperDiv,
  SuggestDiv,
  SuggestTextDiv,
  SuggestBookListDiv,
  TitleTextDiv,
  TextDiv,
  ListContentsDiv,
  ListDiv,
  DistanceDiv,
};
