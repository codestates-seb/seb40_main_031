import styled from 'styled-components';

import Theme from '../../style/Theme';

const Wrap = styled.div`
  margin: 0 auto;
  height: 100%;
  background-color: beige;
  margin-bottom: 300px;
`;

const UserContainer = styled.div`
  margin-top: 10vh;
  width: 50vw;
  height: 30vh;
  background-color: ${Theme.PRIMARY.GREEN};
  border-radius: 2em;
`;

const UserInfoBox = styled.div`
  margin-top: 1vh;
  width: 50vw;
  height: 30vh;
  background-color: ${Theme.PRIMARY.GREEN_LIGHT};
  border-radius: 2em;
  position: relative;
`;

const UserIcon = styled.img`
  width: 8em;
  height: 8em;
  border-radius: 10em;
  background-color: blue;
  position: absolute;
  top: -60px;
  left: 40px;
  z-index: 10;
`;

const ReadBookContainer = styled.div`
  background-color: red;
  display: flex;
  padding: 1em;
`;

const ReadBook = styled.div`
  width: 15vw;
  height: 25vh;
  border-radius: 2em;
  background-color: black;
`;

export {
  Wrap,
  UserContainer,
  UserInfoBox,
  UserIcon,
  ReadBookContainer,
  ReadBook,
};
