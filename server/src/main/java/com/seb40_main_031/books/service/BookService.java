package com.seb40_main_031.books.service;

import com.seb40_main_031.books.Key;
import com.seb40_main_031.books.mapper.BookMapper;
import com.seb40_main_031.books.repository.BookRepository;
import com.seb40_main_031.books.entity.Book;
import com.seb40_main_031.global.error.exception.BusinessLogicException;
import com.seb40_main_031.global.error.exception.ExceptionCode;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class BookService {
    private final BookRepository bookRepository;
    private final BookMapper bookMapper;

    private final Key key;
    public BookService(BookRepository bookRepository, BookMapper bookMapper,
                       Key key) {
        this.bookRepository = bookRepository;
        this.bookMapper = bookMapper;
        this.key = key;
    }

    // 책 상세페이지 조회
    public Book findBook(long bookId) {
        Book book = findVerifiedBook(bookId);
        book.updateReviewCount();
        return book;
    }

    private Book findVerifiedBook(long bookId){
        Optional<Book> optionalBook =
                bookRepository.findByBookId(bookId);
        Book findBook = optionalBook.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.BOOK_NOT_FOUND));

        return findBook;
    }


    // 베스트 셀러 찾기
    public List<Book> findAllBestSeller(long categoryId){
        List<Book> findBooks = new ArrayList<>();
        if(categoryId == 100) findBooks = bookRepository.findAllByNationalRank();
        if(categoryId == 200) findBooks = bookRepository.findAllByForeignRank();

//        List<Book> books = bookMapper.booksToBookDto(findBooks);
        return findBooks;
    }

    // 신간 찾기
    public List<Book> findAllNewBook(long categoryId) {
        // 새로운 book list 생성
        List<Book> findBooks = new ArrayList<>();
        // 카테고리가 100 이면 국내도서 신간 조회 , 200 이면 외국도서 신간 조회
        if(categoryId == 100) findBooks = bookRepository.findAllByCategoryNameStartingWithOrderByPubDateDesc("국내도서");
        if(categoryId == 200) findBooks = bookRepository.findAllByCategoryNameStartingWithOrderByPubDateDesc("외국도서");

        return findBooks;
    }


    // 타이틀로만 찾기..

    public Page<Book> searchBooks(String type, String keyword, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("bookId").descending());

        Page<Book> pageBooks = null;
        if (type.equals("title")) {
            pageBooks = bookRepository.findByTitleContaining(keyword, pageable);
        }
        else if(type.equals("author")){
            pageBooks = bookRepository.findByAuthorContaining(keyword, pageable);
        }
        else if(type.equals("") || keyword.equals("")){
            pageBooks = bookRepository.findAll(pageable);
        }

        return pageBooks;
    }

}
