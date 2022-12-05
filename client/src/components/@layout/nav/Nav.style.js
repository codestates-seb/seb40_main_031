import styled from 'styled-components';
import { Theme } from 'style';

import { darken, lighten } from 'polished';

const NavWrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 10;
  width: 100%;
  position: fixed;

  background-color: ${Theme.PRIMARY.GREEN};

  border-bottom: 2px solid ${darken(0.3, Theme.PRIMARY.GREEN_DARK)};
`;

const LeftDiv = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 0.4rem;
`;

const RightDiv = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const UserImg = styled.img`
  width: auto;
  height: 60%;
  cursor: pointer;
  @media screen and (max-width: 700px) {
    margin-left: 1vw;
  }
`;

const UserNameSpan = styled.span`
  width: auto;
  padding-top: 4px;
  margin-left: 1vw;
  font-size: 1.7rem;
  cursor: pointer;
  color: #febd5a;
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const MainLogoImg = styled.img`
  width: 160px;
  cursor: pointer;
  padding-left: 3rem;
`;

const LayoutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  height: 55px;
  display: flex;
  align-items: center;
  padding: 0 3rem 0rem 3rem;
  .logo {
    font-size: 2rem;
    margin-top: 5px;
    color: ${darken(0.5, Theme.PRIMARY.GREEN_DARK)};
  }
`;

const ModalDiv = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 3rem 0 8rem;
  overflow: hidden;

  .active {
    height: 200px;
    padding-top: 2rem;
    transition: all 0.5s;
  }
  .hidden {
    height: 0px;
    transition: all 0.5s;
  }
`;

const ModalWrapperDiv = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: 50px 50px 50px;
  grid-template-columns: 150px;

  width: 100%;
`;

const ModalListA = styled.a`
  font-size: 1.5rem;
  padding-bottom: 1rem;
  text-decoration: none;
  cursor: pointer;

  /* color: ${lighten(0.2, Theme.PRIMARY.GREEN_DARK)}; */
  color: ${lighten(0.2, '#febd59')};
  &:hover {
    color: ${darken(0.2, '#febd59')};
  }
`;

export {
  NavWrapperDiv,
  LeftDiv,
  LayoutContainer,
  MainLogoImg,
  ModalDiv,
  ModalWrapperDiv,
  ModalListA,
  RightDiv,
  UserNameSpan,
  UserImg,
};
