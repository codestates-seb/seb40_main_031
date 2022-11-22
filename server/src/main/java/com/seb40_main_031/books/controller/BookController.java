package com.seb40_main_031.books.controller;

import com.seb40_main_031.books.entity.Book;
import com.seb40_main_031.books.mapper.BookMapper;
import com.seb40_main_031.books.service.BookService;
import com.seb40_main_031.books.service.CallBookApi;

import com.seb40_main_031.global.common.dto.MultiResponseDto;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/books")
public class BookController {

    private final BookService bookService;
    private final BookMapper bookMapper;
    private final CallBookApi callBookApi;

    public BookController(BookService bookService, BookMapper bookMapper, CallBookApi callBookApi) {
        this.bookService = bookService;
        this.bookMapper = bookMapper;
        this.callBookApi = callBookApi;
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
        List<Book> books = bookService.findAllBestSeller(categoryId);

        return new ResponseEntity<>(bookMapper.booksToBookResponseDto(books), HttpStatus.OK);
    }

    // 신간 조회
    @GetMapping("/newBook/{category-id}")
    public ResponseEntity getNewBook(@PathVariable("category-id") long categoryId){
        List<Book> books = bookService.findAllNewBook(categoryId);

        return new ResponseEntity<>(bookMapper.booksToBookResponseDto(books),HttpStatus.OK);
    }

    // 카테고리 조회 ? 책 검색과 동일..?



    // 책 검색 1. 책 제목, 2. 작가

    @GetMapping("/search")
    public ResponseEntity searchBook(@RequestParam("type") String type,
                                 @RequestParam("keyword") String keyword,
                                     @RequestParam("page") int page,
                                     @RequestParam("size") int size){

        Page<Book> pageBook = bookService.searchBooks(type, keyword, page-1, size);
        List<Book> book = pageBook.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(bookMapper.booksToBookResponseDto(book), pageBook),HttpStatus.OK);
    }



    // cron = 초 분 시 일 월 년
    @Scheduled(cron = "0 30 4 1 * *") // 매주 월요일 4시 30분에 업데이트
    public void updateBooks(){
        callBookApi.saveBestSeller();
        callBookApi.saveNewBook();
    }
}
