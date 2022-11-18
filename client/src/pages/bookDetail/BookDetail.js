import React from 'react';
import * as S from './BookDetail.style';
import Button from '../../components/@layout/button/Button';
import DummyBookDetail from '../../dummyData/DummyBookDetail';
import { HiOutlineChat } from 'react-icons/hi';
import { useState } from 'react';
import ReviewSmall from '../../components/@layout/reviewContent/ReviewSmall';
import { AiOutlineShareAlt } from 'react-icons/ai';

const BookDetail = () => {
  const [bookDetails, setBookDetails] = useState(DummyBookDetail);

  return (
    <div>
      {bookDetails.map((bookDetail) => {
        return (
          <S.Template key={bookDetail.id}>
            <S.BookContent>
              <S.BookContentLeft>
                <S.ImageDateTemplate>
                  <S.Image src={bookDetail.imageURL} />
                  <S.Date>{bookDetail.publishedDate}</S.Date>
                </S.ImageDateTemplate>
              </S.BookContentLeft>
              <S.BookContentCenter>
                <S.BookIntroudce>
                  <S.BookCategory>{bookDetail.category}</S.BookCategory>
                  <S.BookTitleAuthor>
                    <S.BookTitleAuthorTemplate>
                      <S.BookTitle>{bookDetail.title}</S.BookTitle>
                      <S.BookAuthor>{bookDetail.author}</S.BookAuthor>
                    </S.BookTitleAuthorTemplate>
                    <S.BookShare>
                      <AiOutlineShareAlt />
                    </S.BookShare>
                  </S.BookTitleAuthor>
                  <S.BookPrice>{bookDetail.price}</S.BookPrice>
                  <S.BookExplain>{bookDetail.content}</S.BookExplain>
                  <S.BookButton>
                    <Button
                      text='같이 이야기하기'
                      width='350px'
                      height='50px'
                    />
                  </S.BookButton>
                </S.BookIntroudce>
              </S.BookContentCenter>
            </S.BookContent>
            <S.ReviewContent>
              <S.ReviewContentTemplate>
                <S.Review>리뷰 달기</S.Review>
                <S.ReviewClick>
                  <S.ReviewiIconTemplate>
                    <S.ReviewIcon>
                      <HiOutlineChat />
                    </S.ReviewIcon>
                    <S.ReviewCount>리뷰 2 +</S.ReviewCount>
                  </S.ReviewiIconTemplate>
                  <S.ReviewMore>더보기</S.ReviewMore>
                </S.ReviewClick>
                <S.ReviewComponentTemplate>
                  <ReviewSmall />
                </S.ReviewComponentTemplate>
              </S.ReviewContentTemplate>
            </S.ReviewContent>
          </S.Template>
        );
      })}
    </div>
  );
};
export default BookDetail;
