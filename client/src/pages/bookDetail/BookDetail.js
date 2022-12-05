import React, { useEffect } from 'react';
import { Button, ReviewSmall, ModalReview } from 'components';
import { HiOutlineChat } from 'react-icons/hi';
// // import { useRecoilValue } from 'recoil';
import { useState } from 'react';
// // import BookDetailState from 'atom/BookDetailState';
import { AiOutlineShareAlt } from 'react-icons/ai';
import Share from 'components/share/Share';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'api/axios';
import { BOOK_BOOKDETAIL_URL } from 'api';
import { REVEIW_DETAIL_URL } from 'api';

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
  BookShareContainer,
  ShareAnimation,
} from 'pages/bookDetail/BookDetail.style';

const BookDetail = () => {
  // const bookDetails = useRecoilValue(BookDetailState);
  const { id } = useParams();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [openShare, setOpenShare] = useState(false);
  const [bookdetails, setBookdetails] = useState([]);
  const [reviewCount, setReviewcount] = useState();

  const getBookDetail = async () => {
    const res = await axios.get(`${BOOK_BOOKDETAIL_URL}/${id}`);

    setBookdetails(res.data);

    return res.data;
  };

  const getReviewDetailCount = async () => {
    const res = await axios.get(`${REVEIW_DETAIL_URL}/${id}`);
    setReviewcount(res.data.length);
    return res.data;
  };

  useEffect(() => {
    getBookDetail();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getReviewDetailCount();
    // eslint-disable-next-line
  }, []);

  const modalHandler = () => {
    setModal(true);
  };

  const openShareHandler = () => {
    setOpenShare(!openShare);
  };

  const pageHandler = () => {
    navigate(`/reviewdetail/${id}`);
  };

  return (
    <div>
      <Template key={bookdetails.bookId}>
        <BookContent>
          <BookContentLeft>
            <ImageDateTemplate>
              <Image src={bookdetails.coverLargeUrl} />
              <Date>{bookdetails.pubDate}</Date>
            </ImageDateTemplate>
          </BookContentLeft>
          <BookContentCenter>
            <BookIntroudce>
              <BookCategory>{bookdetails.categoryName}</BookCategory>
              <BookTitleAuthor>
                <BookTitleAuthorTemplate>
                  <BookTitle>{bookdetails.title}</BookTitle>
                  <BookAuthor>{bookdetails.author}</BookAuthor>
                </BookTitleAuthorTemplate>

                <BookShareContainer onClick={openShareHandler}>
                  {openShare === true ? null : (
                    <BookShare>
                      <AiOutlineShareAlt />
                    </BookShare>
                  )}
                  <ShareAnimation className={openShare ? 'active' : 'hidden'}>
                    {openShare && <Share setOpenShare={setOpenShare} />}
                  </ShareAnimation>
                </BookShareContainer>
              </BookTitleAuthor>
              <BookPrice>{bookdetails.price}</BookPrice>
              <BookExplain>{bookdetails.description}</BookExplain>
              <BookButton>
                <Button text='같이 이야기하기' width='350px' height='50px' />
              </BookButton>
            </BookIntroudce>
          </BookContentCenter>
        </BookContent>
        <ReviewContent>
          <ReviewContentTemplate>
            <Reviews onClick={modalHandler}>리뷰 달기</Reviews>
            {modal && (
              <ModalReview setModal={setModal} bookdetails={bookdetails} />
            )}
            <ReviewClick>
              <ReviewiIconTemplate>
                <ReviewIcon>
                  <HiOutlineChat />
                </ReviewIcon>
                <ReviewCount>리뷰 {reviewCount} +</ReviewCount>
              </ReviewiIconTemplate>
              <ReviewMore onClick={pageHandler}>더보기</ReviewMore>
            </ReviewClick>
            <ReviewComponentTemplate>
              <ReviewSmall />
            </ReviewComponentTemplate>
          </ReviewContentTemplate>
        </ReviewContent>
      </Template>
      ;
    </div>
  );
};
export default BookDetail;
