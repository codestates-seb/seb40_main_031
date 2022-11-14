package com.seb40_main_031.books;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/books")
public class BookController {

    private final BookRepository bookRepository;
    private final BookService bookService;

    public BookController(BookRepository bookRepository, BookService bookService) {
        this.bookRepository = bookRepository;
        this.bookService = bookService;
    }
    // 책 상세페이지 조회


    // bestSeller 조회
    @GetMapping("/bestSeller/{category-id}")
    public ResponseEntity getBestSeller(@PathVariable("category-id") long categoryId){
        List<Book> books = bookService.findAllBestSeller(categoryId);

        return new ResponseEntity<>(books, HttpStatus.OK);
    }

    // 신간 조회
    @GetMapping("/newBook/{category-id}")
    public ResponseEntity getNewBook(@PathVariable("category-id") long categoryId){
        List<Book> books = bookService.findAllNewBook(categoryId);

        return new ResponseEntity<>(books,HttpStatus.OK);
    }


    // 카테고리 조회


    // 책 검색

}
