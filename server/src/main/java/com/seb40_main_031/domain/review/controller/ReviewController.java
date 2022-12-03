package com.seb40_main_031.domain.review.controller;

import com.seb40_main_031.domain.books.entity.Book;
import com.seb40_main_031.domain.books.service.BookService;
import com.seb40_main_031.domain.member.entity.Member;
import com.seb40_main_031.domain.member.service.MemberService;
import com.seb40_main_031.domain.review.dto.ReviewDto;
import com.seb40_main_031.domain.review.dto.ReviewResponseDto;
import com.seb40_main_031.domain.review.service.ReviewService;

import com.seb40_main_031.global.security.argumentresolver.LoginAccountId;
import com.seb40_main_031.domain.review.entity.Review;

import com.seb40_main_031.domain.review.mapper.ReviewMapper;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reviews")
@RequiredArgsConstructor
public class ReviewController {

    private final ReviewService reviewService;
    private final ReviewMapper reviewMapper;
    private final BookService bookService;
    private final MemberService memberService;

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
    @PatchMapping("/{reviewId}")
    public ResponseEntity modifyReview(@PathVariable Long reviewId,
                                       @LoginAccountId Long memberId,
                                       @RequestBody ReviewDto reviewDto){ // content

        reviewDto.setMember(memberService.findMember(memberId));
        reviewDto.setReviewId(reviewId);

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
    public ResponseEntity getReviews(@PathVariable Long bookId){
        Book book = bookService.findBook(bookId);
        List<Review> books = reviewService.findReviews(book.getBookId());
        return new ResponseEntity(reviewMapper.reviewsToReviewResponseDtos(books)
                , HttpStatus.OK);
    }
}