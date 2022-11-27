import styled from 'styled-components';
import { Theme } from 'style';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
`;
const ContainerDiv = styled.div`
  @media screen and (max-width: 730px) {
    width: 95vw;
  }
  display: flex;
  flex-direction: column;
  width: 700px;
  height: 500px;
  border: 1px solid ${Theme.PRIMARY.BLACK};
  border-radius: 10px;
  padding: 1%;
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
`;
const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 10%;
  min-height: 15px;

  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

const TitleSpan = styled.span`
  font-weight: bold;
  font-size: 40px;
  color: ${Theme.PRIMARY.GREEN_DARK};
`;

const CloseIconSpan = styled.span`
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ReviewTextarea = styled.textarea`
  width: 100%;
  height: 80%;
  padding: 0.5rem 1rem;
  border: none;
  resize: none;
  font-size: 30px;

  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${Theme.PRIMARY.GREEN_DARK};
  }
  &::-webkit-scrollbar-track {
    background-color: gray;
    border-radius: 10px;
  }
  :focus {
    outline: none;
  }
`;

const FooterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 10%;
  min-height: 15px;
  font-size: 30px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

export {
  ModalBackground,
  ContainerDiv,
  HeaderDiv,
  TitleSpan,
  CloseIconSpan,
  ReviewTextarea,
  FooterDiv,
};
