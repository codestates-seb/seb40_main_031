import styled, { keyframes } from 'styled-components';
import { HiOutlineChat } from 'react-icons/hi';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { Theme } from 'style';
import { darken } from 'polished';

const Template = styled.div`
  @media screen and (max-width: 950px) {
    height: 100%;
  }
  width: 100%;
  max-width: 1200px;
`;

const BookContent = styled.div`
  @media screen and (max-width: 950px) {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageDateTemplate = styled.div`
  width: 300px;
  height: 430px;
`;

const Image = styled.img`
  height: 375px;
  width: 299px;
`;

const Date = styled.div`
  height: 60px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: ${darken(0.2, Theme.PRIMARY.GREEN_DARK)};
`;

const ReviewContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  padding-bottom: 100px;
`;

const BookContentLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
`;

const BookContentCenter = styled.div`
  @media screen and (max-width: 623px) {
    width: 90vw;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 500px;
`;

const BookIntroudce = styled.div`
  @media screen and (max-width: 920px) {
    width: 65vw;
  }
  width: 600px;
  height: 430px;
`;

const BookCategory = styled.div`
  height: 20px;
  font-size: 13px;
  color: darkgray;
`;

const BookTitleAuthor = styled.div`
  height: 50px;
  display: flex;
  display: flex;
  justify-content: space-between;
`;
const BookTitleAuthorTemplate = styled.div`
  display: flex;
`;
const BookTitle = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  color: ${darken(0.3, Theme.PRIMARY.GREEN_DARK)};
  word-break: break-all;

  /* letter-spacing: -2px; */
`;

const BookAuthor = styled.div`
  width: 63px;
  padding: 15px 0px 0px 10px;

  font-size: 15px;
  color: ${Theme.PRIMARY.GREEN_DARK};
`;

const BookShareContainer = styled.button`
  display: flex;
  border: none;
  background-color: transparent;
  .active {
    width: 220px;
    transition: all 0.5s;
  }
  .hidden {
    width: 0px;
    transition: all 0.5s;
  }
`;
const BookShare = styled(AiOutlineShareAlt)`
  font-size: 40px;
  cursor: pointer;
  color: ${Theme.PRIMARY.GREEN_DARK};
`;

const ShareAnimation = styled.div``;

const BookExplain = styled.div`
  @media screen and (max-width: 920px) {
    width: 65vw;
  }
  height: 275px;

  padding: 1rem;

  border: 1px solid darkgray;
  font-size: 25px;
  overflow: auto;
  border-radius: 5px;
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

const BookButton = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;

const BookPrice = styled.div`
  font-size: large;
  font-weight: 400;
  height: 30px;
  display: flex;
  align-items: center;
  padding-left: 5px;
`;

const ReviewContentTemplate = styled.div`
  /* width: 1000px;
  height: 450px; */
  border-radius: 4px;
`;

const Reviews = styled.span`
  @media screen and (max-width: 950px) {
    display: flex;
    justify-content: center;
  }
  height: 30px;
  margin-left: 20px;
  border-radius: 4px;
  font-size: 2rem;
  margin-bottom: 30px;
  font-weight: bold;
  color: ${darken(0.3, Theme.PRIMARY.GREEN_DARK)};
  cursor: pointer;
`;

const ReviewClick = styled.div`
  @media screen and (max-width: 950px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
  }
  height: 80px;
  margin-left: 20px;
  border-radius: 4px;
  font-size: 30px;
  display: flex;
  justify-content: space-between;
`;

const ReviewiIconTemplate = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const ReviewIcon = styled(HiOutlineChat)`
  font-size: 40px;
  cursor: pointer;
  color: ${Theme.PRIMARY.GREEN_DARK};
`;

const ReviewCount = styled.div`
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ReviewMore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  font-size: 20px;
  cursor: pointer;
  margin-bottom: 30px;
  color: ${Theme.PRIMARY.GREEN_DARK};
`;

const ReviewComponentTemplate = styled.div`
  width: 1000px;

  height: 100%;
`;

export {
  Template,
  BookContent,
  BookContentLeft,
  BookContentCenter,
  ReviewContent,
  ImageDateTemplate,
  Image,
  Date,
  BookIntroudce,
  BookCategory,
  BookTitleAuthor,
  BookTitle,
  BookAuthor,
  BookExplain,
  BookButton,
  BookPrice,
  ReviewContentTemplate,
  Reviews,
  ReviewClick,
  ReviewiIconTemplate,
  ReviewCount,
  ReviewIcon,
  ReviewMore,
  ReviewComponentTemplate,
  BookTitleAuthorTemplate,
  BookShare,
  BookShareContainer,
  ShareAnimation,
};
