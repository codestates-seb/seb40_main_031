import styled from 'styled-components';
import { Theme } from 'style';
import { FaRegThumbsUp, FaRegUserCircle } from 'react-icons/fa';
import { HiOutlinePencil } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';

const Template = styled.div`
  @media screen and (max-width: 700px) {
    width: 90vw;
    overflow-x: hidden;
    overflow-y: hidden;
  }
  width: 600px;
  height: 250px;
  border: 1px solid ${Theme.PRIMARY.GREEN_DARK};
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 40px;
`;

const UserInfo = styled.div`
  width: 490px;
  height: 35px;
  display: flex;
  align-items: center;
`;

const UserIcon = styled(FaRegUserCircle)`
  font-size: 27px;
  cursor: pointer;
`;

const UserName = styled.div`
  font-size: 25px;
  padding-left: 10px;
`;

const Content = styled.div`
  height: 150px;
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
  height: 50px;
  padding-left: 10px;
  font-size: 24px;
`;

const LeftIconBox = styled.div`
  padding: 7px;
  float: left;
  display: flex;
  align-items: center;
`;

const LeftIcon = styled(FaRegThumbsUp)`
  font-size: 22px;
  color: ${Theme.PRIMARY.GREEN_DARK};
  cursor: pointer;
`;

const LeftText = styled.span`
  font-size: 20px;
  padding-left: 10px;
`;

const RightIconBox = styled.div`
  padding: 10px;
  float: right;
`;

const RightIconUpdate = styled(HiOutlinePencil)`
  font-size: 22px;
  color: black;
  cursor: pointer;
`;

const RightIconDelete = styled(MdClose)`
  font-size: 30px;
  color: red;
  cursor: pointer;
`;

const ReviewCount = styled.div`
  font-size: 30px;
  margin-bottom: 10px;
`;
export {
  Template,
  UserInfo,
  UserIcon,
  UserName,
  Content,
  BottomContent,
  LeftIcon,
  RightIconUpdate,
  RightIconDelete,
  RightIconBox,
  LeftIconBox,
  LeftText,
  ReviewCount,
};
