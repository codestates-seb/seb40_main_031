package com.seb40_main_031.books.dto.controller;

import com.seb40_main_031.books.dto.BookDto;
import com.seb40_main_031.books.entity.Book;
import com.seb40_main_031.books.mapper.BookMapper;
import com.seb40_main_031.books.service.BookService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/books")
public class BookController {

    private final BookService bookService;
    private final BookMapper bookMapper;

    public BookController(BookService bookService, BookMapper bookMapper) {
        this.bookService = bookService;
        this.bookMapper = bookMapper;
    }

    // 책 상세페이지 조회
    @GetMapping("/{book-id}")
    public ResponseEntity getBook(@PathVariable("book-id") long bookId){
        Book book = bookService.findBook(bookId);

        return new ResponseEntity<>(bookMapper.bookToBookResponseDto(book)
                ,HttpStatus.OK);
    }

    // bestSeller 조회
    @GetMapping("/bestSeller/{category-id}")
    public ResponseEntity getBestSeller(@PathVariable("category-id") long categoryId){
        List<BookDto> books = bookService.findAllBestSeller(categoryId);

        return new ResponseEntity<>(bookMapper.booksToBookResponseDto(books), HttpStatus.OK);
    }

    // 신간 조회
    @GetMapping("/newBook/{category-id}")
    public ResponseEntity getNewBook(@PathVariable("category-id") long categoryId){
        List<BookDto> books = bookService.findAllNewBook(categoryId);

        return new ResponseEntity<>(bookMapper.booksToBookResponseDto(books),HttpStatus.OK);
    }

    // 카테고리 조회


    // 책 검색
//    @GetMapping("/books/search")
//    public ResponseEntity searchBook(@RequestParam String keyword){
//        List<BookDto> bookDtos = bookService.findBooksFromTitle(keyword);
//
//        return new ResponseEntity<>(bookMapper.booksToBookResponseDto(bookDtos),
//                HttpStatus.OK);
//    }
}
