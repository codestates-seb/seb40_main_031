package com.seb40_main_031.domain.review.controller;

import com.seb40_main_031.domain.books.entity.Book;
import com.seb40_main_031.domain.books.service.BookService;
import com.seb40_main_031.domain.likes.LikesDto;
import com.seb40_main_031.domain.likes.LikesMapper;
import com.seb40_main_031.domain.likes.LikesResponseDto;
import com.seb40_main_031.domain.review.dto.ReviewDto;
import com.seb40_main_031.domain.review.dto.ReviewResponseDto;
import com.seb40_main_031.domain.review.entity.Review;
import com.seb40_main_031.domain.review.mapper.ReviewMapper;
import com.seb40_main_031.domain.review.service.ReviewService;
import com.seb40_main_031.global.common.dto.MultiResponseDto;
import com.seb40_main_031.domain.likes.entity.Likes;
import com.seb40_main_031.domain.likes.service.LikesService;

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

    private final LikesMapper likesMapper;
    private final LikesService likesService;
    public ReviewController(ReviewService reviewService, ReviewMapper reviewMapper,
                            BookService bookService,LikesMapper likesMapper,
                            LikesService likesService) {
        this.reviewService = reviewService;
        this.reviewMapper = reviewMapper;
        this.bookService = bookService;
        this.likesMapper = likesMapper;
        this.likesService = likesService;
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
    public ResponseEntity getReviews(@PathVariable("book-id")long bookId,
                                     @Positive @RequestParam int page
                                     ){
        Book book = bookService.findBook(bookId);
        Page<Review> pageReviews = reviewService.findReviews(book.getBookId(),page-1, 5);

        List<Review> reviews = pageReviews.getContent();

        return new ResponseEntity(
                new MultiResponseDto<>(reviewMapper.reviewsToReviewResponseDtos(reviews),pageReviews),
                HttpStatus.OK);

    }

    // 좋아요
    @PatchMapping("/likes")
    public ResponseEntity patchLikes(@RequestBody LikesDto likesDto){

        Likes likes = likesMapper.likesDtoToLikes(likesDto);
        if(likes.getLikesCount() == 0) likesService.deleteLikes(likes);
        if(likes.getLikesCount() == 1) likesService.createLikes(likes);

        LikesResponseDto response = likesMapper.likesToLikesResponseDto(likes);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}