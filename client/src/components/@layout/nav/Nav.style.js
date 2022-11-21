import styled from 'styled-components';
import { Theme } from 'style';
import { darken } from 'polished';

const NavWrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  position: fixed;

  background-color: ${(props) => props.backgoudColor || Theme.PRIMARY.GREEN};
`;

const LeftDiv = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 0.4rem;
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

export { NavWrapperDiv, LeftDiv, LayoutContainer, MainLogoImg };
