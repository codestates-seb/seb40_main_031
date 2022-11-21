import React from 'react';
import {
  BookStore,
  BookBuy,
  BookBuyCategory,
  BookBuyImg,
  BookBuyImgSecond,
  BookBuyImgThird,
  BookStoreName,
} from './BookStore.style';

const BookStore = () => {
  return (
    <>
      <BookStore>
        <BookBuy>
          구매 가능한 곳
          <BookBuyCategory>
            <BookBuyImg></BookBuyImg>
            <BookStoreName>알라딘</BookStoreName>
          </BookBuyCategory>
          <BookBuyCategory>
            <BookBuyImgSecond></BookBuyImgSecond>
            <BookStoreName>Yes24</BookStoreName>
          </BookBuyCategory>
          <BookBuyCategory>
            <BookBuyImgThird></BookBuyImgThird>
            <BookStoreName>교보문고</BookStoreName>
          </BookBuyCategory>
        </BookBuy>
      </BookStore>
    </>
  );
};

export default BookStore;
