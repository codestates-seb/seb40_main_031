package com.seb40_main_031.domain.books.controller;

import com.seb40_main_031.domain.books.service.CallBookApi;
import com.seb40_main_031.domain.books.entity.Book;
import com.seb40_main_031.domain.books.mapper.BookMapper;
import com.seb40_main_031.domain.books.service.BookService;

import com.seb40_main_031.global.common.dto.MultiResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/books")
@RequiredArgsConstructor
public class BookController {

    private final BookService bookService;
    private final BookMapper bookMapper;
    private final CallBookApi callBookApi;

    /**
     * 1. 책 상세 페이지 조회
     */
    @GetMapping("/{bookId}")
    public ResponseEntity getBook(@PathVariable Long bookId){
        Book book = bookService.findBook(bookId);
        return new ResponseEntity<>(bookMapper.bookToBookResponseDto(book)
                ,HttpStatus.OK);
    }

    /**
     * 2. 베스트셀러 전체 조회
     */
    @GetMapping("/best-seller/{categoryId}")
    public ResponseEntity getBestSeller(@PathVariable Long categoryId){
        List<Book> books = bookService.findAllBestSeller(categoryId);

        return new ResponseEntity<>(bookMapper.booksToBookListResponseDto(books)
                ,HttpStatus.OK);
    }

    /**
     * 3. 신간 전체 조회
     */
    @GetMapping("/new-book/{categoryId}")
    public ResponseEntity getNewBook(@PathVariable Long categoryId){
        List<Book> books = bookService.findAllNewBook(categoryId);

        return new ResponseEntity<>(bookMapper.booksToBookListResponseDto(books)
                ,HttpStatus.OK);
    }

    /**
     * 4. title , author 타입 검색
     */
    @GetMapping("/search")
    public ResponseEntity searchBook(@RequestParam("type") String type,
                                     @RequestParam("keyword") String keyword,
                                     @RequestParam("page") int page,
                                     @RequestParam("size") int size){

        Page<Book> pageBook = bookService.searchBooks(type, keyword, page-1, size);
        List<Book> book = pageBook.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(bookMapper.booksToBookResponseDto(book), pageBook)
                ,HttpStatus.OK);
    }

    /**
     * 5. categoryId 별 조회
     */
    @GetMapping("/category/{categoryId}")
    public ResponseEntity getCategoryIdBook(@PathVariable String categoryId){
        Page<Book> pageBook = bookService.findAllCategoryId(categoryId);
        List<Book> book = pageBook.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(bookMapper.booksToBookListResponseDto(book), pageBook)
                ,HttpStatus.OK);
    }


    /**
     * 6. 신간, 베스트셀러 API 스케쥴러
     */
    @Scheduled(cron = "0 30 4 ? * MON")
    public void updateBooks(){
        callBookApi.saveBestSeller();
        callBookApi.saveNewBook();
    }
}
