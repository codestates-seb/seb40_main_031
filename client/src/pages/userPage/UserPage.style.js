import styled from 'styled-components';
import { Theme } from 'style';

const Wrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  height: 100%;
  margin-bottom: 300px;
  width: 600px;
  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const UserContainer = styled.div`
  margin-top: 10vh;
  width: 100%;
  height: 30vh;
  min-height: 300px;
  background-color: ${Theme.PRIMARY.GREEN};
  border-radius: 2em;
  display: flex;
  align-items: center;
  position: relative;
`;

const UserCount = styled.div`
  font-size: 2rem;
  bottom: 20px;
  right: 20px;
  position: absolute;
`;

const UserInfoBox = styled.div`
  margin-top: 5px;
  width: 100%;
  height: 100%;
  min-height: 400px;
  padding-bottom: 30px;
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
  z-index: 1;
`;

const ReadBookContainer = styled.div`
  display: flex;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const ReadBook = styled.img`
  width: 190px;
  border-radius: 1em;
  margin-right: 10px;
  cursor: pointer;
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
  background-color: #eee;
  border: none;
  border-radius: 5px;
  width: 2rem;
  height: 2rem;
  &:hover {
    background-color: orange;
  }
`;

const UserAbout = styled.div`
  font-size: 2rem;
  margin-top: -3.5rem;
  padding: 0 20px 0 20px;
`;

const RecentReviews = styled.div`
  font-size: 1.5rem;
  margin-top: 2rem;
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
