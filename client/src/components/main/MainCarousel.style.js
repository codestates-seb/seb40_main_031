import styled from 'styled-components';
import { Theme } from 'style';

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SlideDiv = styled.div`
  display: flex;
  align-items: center;
`;

const BtnDiv = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 3.3rem;
  color: ${Theme.PRIMARY.GREEN_DARK};
  padding: 0 10px;
`;

const WindowDiv = styled.div`
  width: 350px;
  height: 250px;

  overflow: hidden;
`;

const FlexBoxDiv = styled.div`
  display: flex;
`;

const PositionDiv = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;

  .dot {
    background: ${Theme.PRIMARY.GREEN_LIGHT};
    border-radius: 100%;
    height: 10px;
    width: 10px;
  }

  .dot + .dot {
    margin-left: 20px;
  }

  .current {
    background: ${Theme.PRIMARY.GREEN_DARK};
  }
`;

const ImageDiv = styled.div`
  width: 350px;
  height: 250px;
  background-position: 50% 50%;
  background-size: contain;
  background-repeat: no-repeat;
  flex: none;
`;

export {
  ContainerDiv,
  SlideDiv,
  BtnDiv,
  WindowDiv,
  FlexBoxDiv,
  PositionDiv,
  ImageDiv,
};
