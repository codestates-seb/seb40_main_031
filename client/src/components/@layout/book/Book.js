import React from 'react';
import { Container, Bookbox, Img, Title } from './Book.style';
import Dummybooks from './Dummybooks';
import { useState } from 'react';

const Book = ({ title }) => {
  const [books] = useState(Dummybooks);

  return (
    <Container>
      <Title>{title}</Title>
      <Bookbox>
        {books.map((book) => {
          return (
            <span key={book.id}>
              <Img src={book.imgURL} title={book.name}></Img>
              <div>{book.name}</div>
            </span>
          );
        })}
      </Bookbox>
    </Container>
  );
};

export default Book;
