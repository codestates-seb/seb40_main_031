import styled from 'styled-components';
import { Theme } from 'style';
import { IoIosSend } from 'react-icons/io';
import { FaRegUserCircle } from 'react-icons/fa';
import { HiOutlineChat } from 'react-icons/hi';

const All = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
const Template = styled.div`
  @media screen and (max-width: 900px) {
    width: 77vw;
  }
  border: solid 1px darkgray;
  width: 700px;
  height: 900px;
`;

const BookTemplate = styled.div`
  border-bottom: solid 1px darkgray;
  height: 200px;
  display: flex;
`;

const Image = styled.img`
  width: 180px;
  height: 200px;
`;

const TitleAuthor = styled.div`
  width: 520px;
  height: 200px;
`;

const Title = styled.div`
  width: 520px;
  height: 50px;
  font-size: 30px;
  padding: 5px;
  display: flex;
`;
const ChatIconTemplate = styled(HiOutlineChat)`
  margin-left: 5px;
  font-size: 36px;
  color: ${Theme.PRIMARY.GREEN_DARK};
`;
const Author = styled.div`
  width: 520px;
  height: 110px;
  font-size: 15px;
  padding: 6px;
`;
const Chattemplate = styled.div`
  /* @media screen and (max-width: 900px) {
    width: 160vw;
  } */
`;

const ChatStoryBoard = styled.div`
  width: 100%;
  height: 620px;
  padding-top: 10px;
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
  :focus {
    outline: none;
  }
`;

const ChatLine = styled.div`
  width: 36vw;
  height: 5vh;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  word-break: break-all;
  padding: 10px;
`;
const FaceIconBox = styled.div`
  width: 5vw;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FaceIconStyle = styled(FaRegUserCircle)`
  font-size: 40px;
  color: orange;
`;
const FaceIconStyled = styled(FaceIconStyle)`
  font-size: 40px;
  color: violet;
`;
const FaceIconStyledMe = styled(FaceIconStyle)`
  font-size: 40px;
  color: ${Theme.PRIMARY.GREEN_DARK};
`;
const ChatContentLeft = styled.div`
  @media screen and (max-width: 777px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  width: 36vw;
  display: flex;
  align-items: center;
  font-size: 20px;
`;
const ChatContentRight = styled.span`
  @media screen and (max-width: 900px) {
    width: 90vw;
  }
  height: 50px;
  width: 36vw;
  text-align: right;
  padding-top: 10px;
  font-size: 20px;
`;
const ChatInputBox = styled.div`
  @media screen and (max-width: 900px) {
    width: 80vw;
  }
  height: 80px;
  display: flex;
  align-items: center;
`;

const ChatInput = styled.input`
  width: 60vw;
  height: 50px;
  border: solid 1px green;
  border-radius: 30px;
  margin: 10px;
  padding-left: 20px;
`;
const ChatIconBox = styled.div`
  margin: 10px;
  width: 5vw;
  height: 55px;
`;
const ChatIconStyle = styled(IoIosSend)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  cursor: pointer;
  color: ${Theme.PRIMARY.GREEN_DARK};
`;
export {
  All,
  Template,
  BookTemplate,
  Chattemplate,
  Image,
  TitleAuthor,
  Title,
  ChatLine,
  ChatStoryBoard,
  ChatInputBox,
  ChatInput,
  ChatIconBox,
  Author,
  ChatIconStyle,
  FaceIconBox,
  FaceIconStyle,
  ChatContentLeft,
  ChatContentRight,
  ChatIconTemplate,
  FaceIconStyled,
  FaceIconStyledMe,
};
