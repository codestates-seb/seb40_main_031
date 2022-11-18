import React from "react";
import * as S from "./BookStore.style";

const BookStore = () => {
  return (
    <>
      <S.BookStore>
        <S.BookBuy>
          구매 가능한 곳
          <S.BookBuyCategory>
            <S.BookBuyImg></S.BookBuyImg>
            <S.BookStoreName>알라딘</S.BookStoreName>
          </S.BookBuyCategory>
          <S.BookBuyCategory>
            <S.BookBuyImgSecond></S.BookBuyImgSecond>
            <S.BookStoreName>Yes24</S.BookStoreName>
          </S.BookBuyCategory>
          <S.BookBuyCategory>
            <S.BookBuyImgThird></S.BookBuyImgThird>
            <S.BookStoreName>교보문고</S.BookStoreName>
          </S.BookBuyCategory>
        </S.BookBuy>
      </S.BookStore>
    </>
  );
};

export default BookStore;
