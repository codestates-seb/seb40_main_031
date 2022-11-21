import React from 'react';
import Button from '../../components/@layout/button/Button';
import DummyBookDetail from '../../dummyData/DummyBookDetail';
import { HiOutlineChat } from 'react-icons/hi';
import { useState } from 'react';
import ReviewSmall from '../../components/@layout/reviewContent/ReviewSmall';
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
  Review,
  ReviewClick,
  ReviewiIconTemplate,
  ReviewCount,
  ReviewIcon,
  ReviewMore,
  ReviewComponentTemplate,
  BookTitleAuthorTemplate,
  BookShare,
} from './BookDetail.style';

const BookDetail = () => {
  const [bookDetails, setBookDetails] = useState(DummyBookDetail);

  return (
    <div>
      {bookDetails.map((bookDetail) => {
        return (
          <Template key={bookDetail.id}>
            <BookContent>
              <BookContentLeft>
                <ImageDateTemplate>
                  <Image src={bookDetail.imageURL} />
                  <Date>{bookDetail.publishedDate}</Date>
                </ImageDateTemplate>
              </BookContentLeft>
              <BookContentCenter>
                <BookIntroudce>
                  <BookCategory>{bookDetail.category}</BookCategory>
                  <BookTitleAuthor>
                    <BookTitleAuthorTemplate>
                      <BookTitle>{bookDetail.title}</BookTitle>
                      <BookAuthor>{bookDetail.author}</BookAuthor>
                    </BookTitleAuthorTemplate>
                    <BookShare>
                      <AiOutlineShareAlt />
                    </BookShare>
                  </BookTitleAuthor>
                  <BookPrice>{bookDetail.price}</BookPrice>
                  <BookExplain>{bookDetail.content}</BookExplain>
                  <BookButton>
                    <Button
                      text='같이 이야기하기'
                      width='350px'
                      height='50px'
                    />
                  </BookButton>
                </BookIntroudce>
              </BookContentCenter>
            </BookContent>
            <ReviewContent>
              <ReviewContentTemplate>
                <Review>리뷰 달기</Review>
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
        );
      })}
    </div>
  );
};
export default BookDetail;
