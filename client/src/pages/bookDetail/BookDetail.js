import React, { useEffect } from 'react';
import { Button, ReviewSmall, ModalReview } from 'components';
import { HiOutlineChat } from 'react-icons/hi';
// import { useRecoilValue } from 'recoil';
import { useState } from 'react';
// import BookDetailState from 'atom/BookDetailState';
import { AiOutlineShareAlt } from 'react-icons/ai';
import Share from 'components/share/Share';
import { useParams } from 'react-router-dom';
import axios from 'api/axios';
import { BOOK_BOOKDETAIL_URL } from 'api';
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
  const [modal, setModal] = useState(false);
  const [openShare, setOpenShare] = useState(false);
  const [bookdetails, setBookdetails] = useState([]);

  const getBookDetail = async () => {
    const res = await axios.get(`${BOOK_BOOKDETAIL_URL}/${id}`);
    console.log(id);
    console.log(res.data);
    setBookdetails(res.data);
    return res.data;
  };

  useEffect(() => {
    getBookDetail();
  }, []);

  const modalHandler = () => {
    setModal(true);
  };

  const openShareHandler = () => {
    setOpenShare(!openShare);
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
      ;
    </div>
  );
};
export default BookDetail;
