import styled from 'styled-components';
import { Theme } from 'style';

const Wrap = styled.div`
  margin: 0 auto;
  height: 100%;
  margin-bottom: 300px;
  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const UserContainer = styled.div`
  margin-top: 10vh;
  width: 50vw;
  height: 30vh;
  background-color: ${Theme.PRIMARY.GREEN};
  border-radius: 2em;
  display: flex;
  justify-content: end;
  align-items: center;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const UserCount = styled.div`
  font-size: 3rem;
  margin-left: 2rem;
  margin: 2rem;
  margin-top: 15rem;
`;

const UserInfoBox = styled.div`
  margin-top: 1vh;
  width: 50vw;
  height: 30vh;
  background-color: ${Theme.PRIMARY.GREEN_LIGHT};
  border-radius: 2em;
  position: relative;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const UserIcon = styled.img`
  width: 8em;
  height: 8em;
  border-radius: 10em;
  background-color: white;
  position: absolute;
  top: -60px;
  left: 40px;
  z-index: 10;
`;

const ReadBookContainer = styled.div`
  display: flex;
  padding: 1em;
`;

const ReadBook = styled.img`
  width: 15vw;
  height: 25vh;
  border-radius: 1em;
  margin-right: 1rem;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const UserNicknameContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 4rem;
`;

const UserNickname = styled.div`
  font-size: 2rem;
  margin-right: 2rem;
`;

const UserNicknameFix = styled.button`
  background-color: white;
  border: none;
  width: 2rem;
  height: 2rem;
`;

const UserAbout = styled.div`
  font-size: 2rem;
  margin-left: 4rem;
  margin-top: -3.5rem;
`;

const RecentReviews = styled.div`
  font-size: 1.5rem;
  padding: 1rem;
`;

export {
  Wrap,
  UserContainer,
  UserInfoBox,
  UserIcon,
  ReadBookContainer,
  ReadBook,
  UserNickname,
  UserCount,
  UserNicknameFix,
  UserNicknameContainer,
  UserAbout,
  RecentReviews,
};
