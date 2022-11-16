package com.seb40_main_031.review.controller;

import com.seb40_main_031.books.entity.Book;
import com.seb40_main_031.books.service.BookService;
import com.seb40_main_031.response.MultiResponseDto;
import com.seb40_main_031.review.dto.ReviewDto;
import com.seb40_main_031.review.dto.ReviewResponseDto;
import com.seb40_main_031.review.entity.Review;
import com.seb40_main_031.review.mapper.ReviewMapper;
import com.seb40_main_031.review.service.ReviewService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.util.List;

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
        reviewDto.setBook(book);

        Review review = reviewMapper.reviewDtoToReview(reviewDto);
        reviewService.createReview(review);

        ReviewResponseDto response =
                reviewMapper.reviewToReviewResponseDto(review);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    // review 수정
    @PatchMapping("/{book-id}")
    public ResponseEntity modifyReview(@PathVariable("book-id") long bookId,
                                       @RequestBody ReviewDto reviewDto){
        Book book = bookService.findBook(bookId);
        reviewDto.setBook(book);

        Review review = reviewMapper.reviewDtoToReview(reviewDto);
        reviewService.modifiedReview(review);

        ReviewResponseDto response =
                reviewMapper.reviewToReviewResponseDto(review);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    // review 삭제 book-id..
    @DeleteMapping("/{book-id}")
    public void deleteReview(@PathVariable("book-id") long bookId,
                             @RequestBody long memberId,
                             @RequestBody long reviewId) {
        reviewService.deleteReview(reviewId, memberId);
    }

    // review 조회 (단일 조회, 리스트 조회)
//    @GetMapping("/{book-id}")
//    public ResponseEntity getReview(@PathVariable("book-id") long bookId,
//                                    @RequestBody long memberId,
//                                    @RequestBody long reviewId){
//        // 책이 있는지 찾기  // 책페이지에서 review를 작성하는데 필요할까? 그냥 reviewId만?
//        bookService.findBook(bookId);
//        // reviewId와 memberId로 review 찾기
//        Review review = reviewService.findReview(reviewId);
//
//        // review -> response 로 바꿔서 반환하기
//        ReviewResponseDto response =
//                reviewMapper.reviewToReviewResponseDto(review);
//
//        return new ResponseEntity<>(response, HttpStatus.OK);
//    }

    @GetMapping("/{book-id}")
    public ResponseEntity getReviews(@Positive @RequestParam int page,
                                     @Positive @RequestParam int size){
        Page<Review> pageReviews = reviewService.findReviews(page-1, size);
        List<Review> reviews = pageReviews.getContent();

        return new ResponseEntity(
                new MultiResponseDto<>(reviewMapper.reviewsToReviewResponseDtos(reviews),pageReviews),
                        HttpStatus.OK);
    }

    // 좋아요
}