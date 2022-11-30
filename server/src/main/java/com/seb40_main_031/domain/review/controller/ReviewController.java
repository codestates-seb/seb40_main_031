package com.seb40_main_031.domain.review.controller;

import com.seb40_main_031.domain.books.entity.Book;
import com.seb40_main_031.domain.books.service.BookService;
import com.seb40_main_031.domain.member.entity.Member;
import com.seb40_main_031.domain.member.service.MemberService;
import com.seb40_main_031.domain.review.dto.ReviewDto;
import com.seb40_main_031.domain.review.dto.ReviewResponseDto;
import com.seb40_main_031.domain.review.service.ReviewService;
import com.seb40_main_031.global.common.dto.MultiResponseDto;

import com.seb40_main_031.global.error.exception.BusinessLogicException;
import com.seb40_main_031.global.security.argumentresolver.LoginAccountId;
import com.seb40_main_031.domain.review.entity.Review;

import com.seb40_main_031.domain.review.mapper.ReviewMapper;

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
    private final MemberService memberService;


    public ReviewController(ReviewService reviewService, ReviewMapper reviewMapper,
                            BookService bookService, MemberService memberService) {
        this.reviewService = reviewService;
        this.reviewMapper = reviewMapper;
        this.bookService = bookService;
        this.memberService = memberService;
    }

    /**
     * 1. review 생성
     */
    @PostMapping("/{bookId}")
    public ResponseEntity postReview(@PathVariable Long bookId,
                                     @LoginAccountId Long memberId,
                                     @RequestBody ReviewDto reviewDto){

        Member member = memberService.findMember(memberId);
        reviewDto.setBook(bookService.findBook(bookId));
        reviewDto.setMember(member);

        Review review = reviewMapper.reviewDtoToReview(reviewDto);
        member.updateMemberPoint(review);
        reviewService.createReview(review);

        ReviewResponseDto response =
                reviewMapper.reviewToReviewResponseDto(review);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    /**
     * 2. review 수정
     */
    @PatchMapping("/{bookId}")
    public ResponseEntity modifyReview(@PathVariable Long bookId,
                                       @LoginAccountId Long memberId,
                                       @RequestBody ReviewDto reviewDto){ // content

        reviewDto.setBook(bookService.findBook(bookId));
        reviewDto.setMember(memberService.findMember(memberId));

        Review review = reviewMapper.reviewDtoToReview(reviewDto);
        Review modifiedReview = reviewService.modifiedReview(review, memberId);

        ReviewResponseDto response =
                reviewMapper.reviewToReviewResponseDto(modifiedReview);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    /**
     * 3. review 삭제
     */
    @DeleteMapping("/{reviewId}")
    public void deleteReview(@PathVariable Long reviewId,
                             @LoginAccountId Long memberId) {
        reviewService.deleteReview(reviewId, memberId);
    }

    /**
     * 4. bookId 에 연결 된 review 전체 조회
     */
    @GetMapping("/{bookId}")
    public ResponseEntity getReviews(@PathVariable Long bookId,
                                     @Positive @RequestParam int page){
        Book book = bookService.findBook(bookId);
        Page<Review> pageReviews = reviewService.findReviews(book.getBookId(),page-1, 5);
        List<Review> reviews = pageReviews.getContent();

        return new ResponseEntity(
                new MultiResponseDto<>(reviewMapper.reviewsToReviewResponseDtos(reviews),pageReviews)
                , HttpStatus.OK);
    }

//    /**
//     * 5. bookId 에 연결 된 review 단일 조회
//     */
//    @GetMapping("/{bookId}/{reviewId}")
//    public ResponseEntity getReview(@PathVariable Long bookId,
//                                    @LoginAccountId Long memberId,
//                                    @RequestBody Long reviewId){
//        bookService.findBook(bookId);
//        Review review = reviewService.findReview(reviewId);
//        ReviewResponseDto response =
//                reviewMapper.reviewToReviewResponseDto(review);
//
//        return new ResponseEntity<>(response, HttpStatus.OK);
//    }
}