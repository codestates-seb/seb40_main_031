import React, { useState, useEffect } from 'react';
import {
  Button,
  ReviewSmall,
  ModalReview,
  Share,
  AlertModal,
} from 'components';
import { HiOutlineChat } from 'react-icons/hi';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'api/axios';
import { BOOK_BOOKDETAIL_URL, REVEIW_DETAIL_URL } from 'api';

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
  const { id } = useParams();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [openShare, setOpenShare] = useState(false);
  const [bookdetails, setBookdetails] = useState([]);
  const [reviewCount, setReviewcount] = useState();
  const [alert, setAlert] = useState({
    open: false,
    title: '',
    message: '',
    callback: false,
  });

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

  const priceHandler = (str) => {
    let result = '';
    let stringify = String(str);
    if (stringify.length === 6) {
      result = `${stringify.substring(0, 3)},${stringify.substring(3, 6)}`;
      return result;
    } else {
      result = `${stringify.substring(0, 2)},${stringify.substring(2, 5)}`;
      return result;
    }
  };

  const chatButtonHandler = () => {
    setAlert({
      open: true,
      title: '채팅방으로 갈 수 없어요',
      message:
        '눈이 많이 와서 채팅방으로 가는 길이 막혔어요😣 다음에 다시 찾아주세요.',
    });
  };

  useEffect(() => {
    getBookDetail();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getReviewDetailCount();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <AlertModal
        open={alert.open}
        setPopup={setAlert}
        message={alert.message}
        title={alert.title}
        callback={alert.callback}
      />
      {modal && <ModalReview setModal={setModal} bookdetails={bookdetails} />}
      <Template key={bookdetails.bookId}>
        <BookContent>
          <BookContentLeft>
            <ImageDateTemplate>
              <Image src={bookdetails.coverLargeUrl} />
              <Date>{`${String(bookdetails.pubDate).substring(0, 4)}. ${String(
                bookdetails.pubDate,
              ).substring(4, 6)}. ${String(bookdetails.pubDate).substring(
                6,
                8,
              )}. 출시`}</Date>
            </ImageDateTemplate>
          </BookContentLeft>
          <BookContentCenter>
            <BookIntroudce>
              <BookCategory>{bookdetails.categoryName}</BookCategory>
              <BookTitleAuthor>
                <BookTitleAuthorTemplate>
                  <BookTitle>{bookdetails.title}</BookTitle>
                </BookTitleAuthorTemplate>

                <BookShareContainer>
                  <BookShare onClick={() => openShareHandler()}>
                    <AiOutlineShareAlt />
                  </BookShare>

                  <ShareAnimation className={openShare ? 'active' : 'hidden'}>
                    {openShare && <Share setOpenShare={setOpenShare} />}
                  </ShareAnimation>
                </BookShareContainer>
              </BookTitleAuthor>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <BookPrice>{priceHandler(bookdetails.price)}원</BookPrice>
                <BookAuthor>
                  <span>{bookdetails.author}</span>
                </BookAuthor>
              </div>
              <BookExplain>{bookdetails.description}</BookExplain>
              <BookButton>
                <Button
                  text='같이 이야기하기'
                  width='350px'
                  height='50px'
                  onClick={() => chatButtonHandler()}
                />
              </BookButton>
            </BookIntroudce>
          </BookContentCenter>
        </BookContent>
        <ReviewContent>
          <ReviewContentTemplate>
            <Reviews onClick={modalHandler}>리뷰 작성</Reviews>
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
    </div>
  );
};
export default BookDetail;
