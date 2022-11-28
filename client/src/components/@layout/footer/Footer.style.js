import styled from 'styled-components';
import { Theme } from 'style';

import { darken, lighten, margin } from 'polished';

const Wrap = styled.div`
  width: 100%;
  height: 250px;
  background-color: ${Theme.PRIMARY.BLACK};
  color: #ccc;
  position: absolute;
  bottom: 0;
  left: 0;

  padding: 2rem;
`;

const LayoutContainer = styled.div`
  @media screen {
    max-width: 1320px;
    margin: auto;

    height: 100%;
  }
  li {
    display: flex;
    flex-direction: column;
  }
`;

const UpperContainerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70%;

  ul {
    display: flex;
    padding-left: 0;
  }
  li {
    margin-right: 2rem;
    div {
      margin-bottom: 0.5rem;
    }
  }
`;

const LinkA = styled.a.attrs({ target: '_blank', rel: 'noreferrer' })`
  display: inline-block;
  text-decoration: none;
  margin-bottom: 0.5rem;
  color: ${Theme.PRIMARY.GREEN_LIGHT};
  :hover {
    color: orange;
  }
`;

const LinkDiv = styled.div`
  display: flex;
  align-items: flex-start;
  width: 70px;
`;

const SocialDiv = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: space-between;
  margin-bottom: 0;
  @media screen and (max-width: 550px) {
    flex-direction: column;
    height: 50%;
  }
`;

const LowerContainerDiv = styled.div`
  display: flex;
  height: 30%;
`;

const LogoImg = styled.img`
  &.big {
    width: 120px;
    @media screen and (max-width: 500px) {
      display: none;
    }
  }
  &.small {
    width: 50px;
    height: 50px;
    margin-right: 1rem;
    display: none;
    @media screen and (max-width: 500px) {
      display: flex;
    }
  }
`;

const CopyrightCSDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 150px);
  @media screen and (max-width: 500px) {
    width: calc(100% - 50px);
  }
`;

const CopyrightDiv = styled.div`
  display: flex;
  align-items: flex-end;
  width: 80%;
  padding-bottom: 0.5rem;

  color: #aaa;
  font-size: 0.6rem;
`;

const CustomerServiceDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  width: auto;
`;

const LinkToA = styled.a.attrs({ target: '_blank', rel: 'noreferrer' })`
  display: inline-block;
  text-decoration: none;
  color: ${Theme.PRIMARY.GREEN_LIGHT};
  cursor: pointer;
  :hover {
    color: orange;
  }
`;

export {
  Wrap,
  LayoutContainer,
  UpperContainerDiv,
  LinkA,
  LinkDiv,
  SocialDiv,
  LowerContainerDiv,
  LogoImg,
  CopyrightCSDiv,
  CopyrightDiv,
  CustomerServiceDiv,
  LinkToA,
};
