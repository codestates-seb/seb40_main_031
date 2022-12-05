import React from 'react';
import { useRecoilValue } from 'recoil';
import BookDetailState from 'atom/BookDetailState';
import { IoIosSend } from 'react-icons/io';
import { HiOutlineChat } from 'react-icons/hi';
import { FaRegUserCircle } from 'react-icons/fa';
import {
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
} from './Chat.style';

const Chat = () => {
  const bookInfor = useRecoilValue(BookDetailState);
  return (
    <All>
      <Template key={bookInfor.id}>
        <BookTemplate>
          <Image src={bookInfor.imageURL} />
          <TitleAuthor>
            <Title>
              {bookInfor.title}
              <ChatIconTemplate>
                <HiOutlineChat />
              </ChatIconTemplate>
            </Title>

            <Author>{bookInfor.author}</Author>
          </TitleAuthor>
        </BookTemplate>

        <Chattemplate>
          <ChatStoryBoard>
            <ChatLine>
              <FaceIconBox>
                <FaceIconStyle>
                  <FaRegUserCircle />
                </FaceIconStyle>
              </FaceIconBox>
              <ChatContentLeft>
                세상에서 가장 빠른 개가 뭔지알아?ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ
              </ChatContentLeft>
            </ChatLine>
            <ChatLine>
              <FaceIconBox>
                <FaceIconStyle>
                  <FaRegUserCircle />
                </FaceIconStyle>
              </FaceIconBox>
              <ChatContentLeft>맞춰봐 ㅋ</ChatContentLeft>
            </ChatLine>
            <ChatLine>
              <FaceIconBox>
                <FaceIconStyled>
                  <FaRegUserCircle />
                </FaceIconStyled>
              </FaceIconBox>
              <ChatContentLeft>머임?</ChatContentLeft>
            </ChatLine>
            <ChatLine>
              <FaceIconBox>
                <FaceIconStyle>
                  <FaRegUserCircle />
                </FaceIconStyle>
              </FaceIconBox>
              <ChatContentLeft>번개 ㅋ</ChatContentLeft>
            </ChatLine>
            <ChatLine>
              <FaceIconBox>
                <FaceIconStyled>
                  <FaRegUserCircle />
                </FaceIconStyled>
              </FaceIconBox>
              <ChatContentLeft>WOW</ChatContentLeft>
            </ChatLine>
            <ChatLine>
              <FaceIconBox>
                <FaceIconStyle>
                  <FaRegUserCircle />
                </FaceIconStyle>
              </FaceIconBox>
              <ChatContentLeft>진짜 너무 재밌다 ㅇㅈ?</ChatContentLeft>
            </ChatLine>
            <ChatLine>
              <FaceIconBox>
                <FaceIconStyle>
                  <FaRegUserCircle />
                </FaceIconStyle>
              </FaceIconBox>
              <ChatContentLeft>ㅋㅋ</ChatContentLeft>
            </ChatLine>
            <ChatLine>
              <FaceIconBox>
                <FaceIconStyled>
                  <FaRegUserCircle />
                </FaceIconStyled>
              </FaceIconBox>
              <ChatContentLeft>우리 헤어지자</ChatContentLeft>
            </ChatLine>
            <ChatLine>
              <ChatContentRight>ㄷㄷ..</ChatContentRight>
              <FaceIconBox>
                <FaceIconStyledMe>
                  <FaRegUserCircle />
                </FaceIconStyledMe>
              </FaceIconBox>
            </ChatLine>
          </ChatStoryBoard>
          <ChatInputBox>
            <ChatInput placeholder='내용을 입력해주세요!'></ChatInput>
            <ChatIconBox>
              <ChatIconStyle>
                <IoIosSend />
              </ChatIconStyle>
            </ChatIconBox>
          </ChatInputBox>
        </Chattemplate>
      </Template>
    </All>
  );
};
export default Chat;
