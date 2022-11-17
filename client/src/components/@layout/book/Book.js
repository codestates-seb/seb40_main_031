import React from 'react';
import * as S from './Book.style';
import Dummybooks from './Dummybooks';
import { useState } from 'react';

const Book = ({ title }) => {
  const [books] = useState(Dummybooks);

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Bookbox>
        {books.map((book) => {
          return (
            <span key={book.id}>
              <S.Img src={book.imgURL} title={book.name}></S.Img>
              <div>{book.name}</div>
            </span>
          );
        })}
      </S.Bookbox>
    </S.Container>
  );
};

export default Book;
