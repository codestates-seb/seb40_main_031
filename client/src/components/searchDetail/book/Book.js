import React from 'react';
import {
  Container,
  Bookbox,
  Img,
  Title,
  TitleMini,
  BookSpan,
} from 'components/searchDetail/book/Book.style';
import { useState, useEffect } from 'react';
import axios from 'api/axios';
import { BOOK_SEARCH_URL } from 'api';
import { bookReSearch } from 'atom';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';

const Book = ({ title }) => {
  const [books, setBooks] = useState([]);
  const [booksTwo, setBooksTwo] = useState([]);

  const word = useRecoilValue(bookReSearch);

  const getSearchBook = async () => {
    const res = await axios.get(
      `${BOOK_SEARCH_URL}title&keyword=${word}&page=1&size=10`,
    );
    setBooks(res.data.data);
  };

  const getAuthorBook = async () => {
    const res = await axios.get(
      `${BOOK_SEARCH_URL}author&keyword=${word}&page=1&size=10`,
    );
    setBooksTwo(res.data.data);
  };

  useEffect(() => {
    getSearchBook();
    getAuthorBook();
    // eslint-disable-next-line
  }, [word]);

  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate(`/bookdetail/${e}`);
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Bookbox>
        {books.map((book) => {
          return (
            <BookSpan key={book.bookId}>
              <Img
                src={book.coverLargeUrl}
                title={book.title}
                onClick={() => {
                  handleClick(book.bookId);
                }}
              ></Img>
              <TitleMini title={book.title}>{book.title}</TitleMini>
            </BookSpan>
          );
        })}
        {booksTwo.map((book) => {
          return (
            <BookSpan key={book.bookId}>
              <Img
                src={book.coverLargeUrl}
                title={book.title}
                onClick={() => {
                  handleClick(book.bookId);
                }}
              ></Img>
              <TitleMini title={book.title}>{book.title}</TitleMini>
            </BookSpan>
          );
        })}
      </Bookbox>
    </Container>
  );
};

export default Book;
