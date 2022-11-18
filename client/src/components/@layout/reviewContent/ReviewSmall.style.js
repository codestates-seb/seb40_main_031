import styled from 'styled-components';
import { Theme } from '../../../style/index';
import { FaRegThumbsUp } from 'react-icons/fa';

const Display = styled.div`
  display: flex;
`;
const Template = styled.div`
  min-height: 320px;
  width: 500px;
  border: 1px solid ${Theme.PRIMARY.GREEN_DARK};
  border-radius: 8px;
  padding: 10px;
  margin: 0px 20px 0px 20px;
`;

const Content = styled.div`
  font-size: 20px;
  height: 240px;
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid darkgray;
  word-break: break-all;
  overflow: auto;
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
`;

const BottomContent = styled.div`
  height: 60px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  font-size: 20px;
`;

const GoodIcon = styled(FaRegThumbsUp)`
  display: flex;
  align-items: center;
  font-size: 24px;
  color: #88c399;
  cursor: pointer;
`;
const LeftText = styled.span`
  font-size: 20px;
  padding-left: 10px;
`;

export { Template, Content, BottomContent, GoodIcon, LeftText, Display };
