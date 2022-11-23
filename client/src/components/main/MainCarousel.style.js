import styled from 'styled-components';
import { Theme } from 'style'; // Theme 색상이 저장되어 있는 storage

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
  width: 220px;
  height: 300px;
  margin-left: 50px;
  margin-right: 50px;

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

const ImageImg = styled.img`
  width: 220px;
  height: 300px;
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
  ImageImg,
};
