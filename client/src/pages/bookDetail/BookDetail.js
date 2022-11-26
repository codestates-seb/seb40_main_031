import React from 'react';
import { Button, ReviewSmall, ModalReview } from 'components';
import { HiOutlineChat } from 'react-icons/hi';
import { useRecoilValue } from 'recoil';
import { useState } from 'react';
import BookDetailState from 'atom/BookDetailState';
import { AiOutlineShareAlt } from 'react-icons/ai';

import {
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
} from 'pages/bookDetail/BookDetail.style';

const BookDetail = () => {
  const bookDetails = useRecoilValue(BookDetailState);
  const [modal, setModal] = useState(false);

  const modalHandler = () => {
    setModal(true);
  };
  return (
    <div>
      <Template key={bookDetails.id}>
        <BookContent>
          <BookContentLeft>
            <ImageDateTemplate>
              <Image src={bookDetails.imageURL} />
              <Date>{bookDetails.publishedDate}</Date>
            </ImageDateTemplate>
          </BookContentLeft>
          <BookContentCenter>
            <BookIntroudce>
              <BookCategory>{bookDetails.category}</BookCategory>
              <BookTitleAuthor>
                <BookTitleAuthorTemplate>
                  <BookTitle>{bookDetails.title}</BookTitle>
                  <BookAuthor>{bookDetails.author}</BookAuthor>
                </BookTitleAuthorTemplate>
                <BookShare>
                  <AiOutlineShareAlt />
                </BookShare>
              </BookTitleAuthor>
              <BookPrice>{bookDetails.price}</BookPrice>
              <BookExplain>{bookDetails.content}</BookExplain>
              <BookButton>
                <Button text='같이 이야기하기' width='350px' height='50px' />
              </BookButton>
            </BookIntroudce>
          </BookContentCenter>
        </BookContent>
        <ReviewContent>
          <ReviewContentTemplate>
            <Reviews onClick={modalHandler}>리뷰 달기</Reviews>
            {modal && <ModalReview setModal={setModal} />}
            <ReviewClick>
              <ReviewiIconTemplate>
                <ReviewIcon>
                  <HiOutlineChat />
                </ReviewIcon>
                <ReviewCount>리뷰 2 +</ReviewCount>
              </ReviewiIconTemplate>
              <ReviewMore>더보기</ReviewMore>
            </ReviewClick>
            <ReviewComponentTemplate>
              <ReviewSmall />
            </ReviewComponentTemplate>
          </ReviewContentTemplate>
        </ReviewContent>
      </Template>
    </div>
  );
};
export default BookDetail;
