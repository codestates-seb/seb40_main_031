import styled from 'styled-components';
import { Theme } from 'style';

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  max-width: 250px;
  min-height: 250px;
  height: 60vh;
  border: 1px solid ${Theme.PRIMARY.BLACK};
  border-radius: 10px;

  padding: 1%;
  margin-left: 10px;
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
  font-size: 15px;
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
  font-size: 10px;

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

  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

export {
  ContainerDiv,
  HeaderDiv,
  TitleSpan,
  CloseIconSpan,
  ReviewTextarea,
  FooterDiv,
};
