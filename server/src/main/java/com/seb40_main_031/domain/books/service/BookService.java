package com.seb40_main_031.domain.books.service;

import com.seb40_main_031.domain.books.repository.BookRepository;
import com.seb40_main_031.domain.books.entity.Book;
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

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public Book findBook(Long bookId) {
        Book book = findVerifiedBook(bookId);
        book.updateReviewCount();
        return book;
    }
    private Book findVerifiedBook(Long bookId){
        Optional<Book> optionalBook =
                bookRepository.findByBookId(bookId);

        return optionalBook.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.BOOK_NOT_FOUND));
    }

    public List<Book> findAllBestSeller(Long categoryId){
        List<Book> findBooks = new ArrayList<>();
        if(categoryId == 100) findBooks = bookRepository.findAllByNationalRank();
        if(categoryId == 200) findBooks = bookRepository.findAllByForeignRank();

        return findBooks;
    }
    public List<Book> findAllNewBook(Long categoryId) {
        List<Book> findBooks = new ArrayList<>();
        // 카테고리가 100 이면 국내도서 신간 조회 , 200 이면 외국도서 신간 조회
        if(categoryId == 100) findBooks = bookRepository.findAllByCategoryNameStartingWithOrderByPubDateDesc("국내도서");
        if(categoryId == 200) findBooks = bookRepository.findAllByCategoryNameStartingWithOrderByPubDateDesc("외국도서");

        return findBooks;
    }


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
    public Page<Book> findAllCategoryId(String categoryId){
        Pageable pageable = PageRequest.of(0, 20, Sort.by("bookId").descending());

        return bookRepository.findAllByCategoryId(categoryId , pageable);
    }
}
