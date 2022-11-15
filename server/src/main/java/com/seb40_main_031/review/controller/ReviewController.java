package com.seb40_main_031.review.controller;

import com.seb40_main_031.books.BusinessLogicException;
import com.seb40_main_031.books.ExceptionCode;
import com.seb40_main_031.books.entity.Book;
import com.seb40_main_031.books.service.BookService;
import com.seb40_main_031.review.dto.ReviewDto;
import com.seb40_main_031.review.dto.ReviewResponseDto;
import com.seb40_main_031.review.entity.Review;
import com.seb40_main_031.review.mapper.ReviewMapper;
import com.seb40_main_031.review.service.ReviewService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/reviews")
public class ReviewController {

    private final ReviewService reviewService;
    private final ReviewMapper reviewMapper;
    private final BookService bookService;

    public ReviewController(ReviewService reviewService, ReviewMapper reviewMapper,
                            BookService bookService) {
        this.reviewService = reviewService;
        this.reviewMapper = reviewMapper;
        this.bookService = bookService;
    }

    // review 생성 /{book-id}
    @PostMapping("/{book-id}")
    public ResponseEntity postReview(@PathVariable("book-id") long bookId,
                                     @RequestBody ReviewDto reviewDto){

        Book book = bookService.findBook(bookId);
        // 책을 찾아서 있으면 reviewDto에 bookId 담았다.
        reviewDto.setBook(book);

        Review review = reviewMapper.reviewDtoToReview(reviewDto);
//        review.setBook(book);
        reviewService.createReview(review);

        ReviewResponseDto response =
                reviewMapper.reviewToReviewResponseDto(review);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    // review 수정

    // review 삭제 book-id..
    @DeleteMapping("/{book-id}")
    public void deleteReview(@PathVariable("book-id") long bookId,
                             @RequestBody long memberId,
                             @RequestBody long reviewId){
            reviewService.deleteReview(reviewId, memberId);
    }

    // review 조회 (단일 조회, 리스트 조회)

    // 좋아요
}