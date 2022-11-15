package com.seb40_main_031.books.service;

import com.seb40_main_031.books.BusinessLogicException;
import com.seb40_main_031.books.ExceptionCode;
import com.seb40_main_031.books.dto.BookDto;
import com.seb40_main_031.books.dto.BookResponseDto;
import com.seb40_main_031.books.mapper.BookMapper;
import com.seb40_main_031.books.repository.BookRepository;
import com.seb40_main_031.books.entity.Book;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class BookService {
    private final BookRepository bookRepository;
    private final BookMapper bookMapper;

    public BookService(BookRepository bookRepository, BookMapper bookMapper) {
        this.bookRepository = bookRepository;
        this.bookMapper = bookMapper;
    }

    // 책 상세페이지 조회
    public Book findBook(long bookId) {
        return findVerifiedBook(bookId);
    }

    private Book findVerifiedBook(long bookId){
        Optional<Book> optionalBook =
                bookRepository.findByBookId(bookId);
        Book findBook = optionalBook.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.BOOK_NOT_FOUND));

        return findBook;
    }


    // 베스트 셀러 찾기
    public List<BookDto> findAllBestSeller(long categoryId){
        List<Book> findBooks = new ArrayList<>();
        if(categoryId == 100) findBooks = bookRepository.findByNationalRank();
        if(categoryId == 200) findBooks = bookRepository.findByForeignRank();

        List<BookDto> bookDtos = bookMapper.booksToBookDto(findBooks);
        return bookDtos;
    }

    // 신간 찾기
    public List<BookDto> findAllNewBook(long categoryId) {
        // 새로운 book list 생성
        List<Book> findBooks = new ArrayList<>();
        // 카테고리가 100 이면 국내도서 신간 조회 , 200 이면 외국도서 신간 조회
        if(categoryId == 100) findBooks = bookRepository.findAllByCategoryNameStartingWithOrderByPubDateDesc("국내도서");
        if(categoryId == 200) findBooks = bookRepository.findAllByCategoryNameStartingWithOrderByPubDateDesc("외국도서");
        List<BookDto> bookDtos = bookMapper.booksToBookDto(findBooks);

        return bookDtos;
    }


    public List<BookDto> findBooksFromTitle(String keyword) {
        List<Book> findBooks = bookRepository.findByTitleContaining(keyword);
        List<BookDto> bookDtos = new ArrayList<>();

        // 레파지토리에 없다면 빈 Bookdtos를 반환
        if(findBooks.isEmpty()) return bookDtos;

        for(int i =0; i<findBooks.size(); i++){
            BookDto bookDto = bookMapper.booksToBookDto(findBooks).get(i);
            bookDtos.add(bookDto);
        }
        return bookDtos;
    }
}
