import React from 'react';
import {
  BookStoreDiv,
  BookBuy,
  BookBuyCategory,
  BookBuyImg,
  BookStoreName,
} from 'components/bookStore/BookStore.style';

const BookStore = () => {
  return (
    <BookStoreDiv>
      <BookBuy>
        구매 가능한 곳
        <BookBuyCategory>
          <BookBuyImg src='https://an2-glx.amz.wtchn.net/images/ex_aladin_logo_square.png' />
          <BookStoreName>알라딘</BookStoreName>
        </BookBuyCategory>
        <BookBuyCategory>
          <BookBuyImg src='https://an2-glx.amz.wtchn.net/images/ex_yes24_logo_square.png' />
          <BookStoreName>Yes24</BookStoreName>
        </BookBuyCategory>
        <BookBuyCategory>
          <BookBuyImg src='https://an2-glx.amz.wtchn.net/images/ex_kyobo_logo_square.png' />
          <BookStoreName>교보문고</BookStoreName>
        </BookBuyCategory>
      </BookBuy>
    </BookStoreDiv>
  );
};

export default BookStore;
