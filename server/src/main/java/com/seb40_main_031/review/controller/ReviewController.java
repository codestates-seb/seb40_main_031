package com.seb40_main_031.review.controller;

import com.seb40_main_031.books.entity.Book;
import com.seb40_main_031.books.service.BookService;
import com.seb40_main_031.domain.member.entity.Member;
import com.seb40_main_031.domain.member.service.MemberService;
import com.seb40_main_031.global.common.dto.MultiResponseDto;

import com.seb40_main_031.global.security.argumentresolver.LoginAccountId;
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
    private final MemberService memberService;


    public ReviewController(ReviewService reviewService, ReviewMapper reviewMapper,
                            BookService bookService, MemberService memberService) {
        this.reviewService = reviewService;
        this.reviewMapper = reviewMapper;
        this.bookService = bookService;
        this.memberService = memberService;
    }

    // review 생성 /{book-id}
    @PostMapping("/{bookId}")
    public ResponseEntity postReview(@PathVariable Long bookId,
                                     @LoginAccountId Long memberId,
                                     @RequestBody ReviewDto reviewDto){
        Member member = memberService.findMember(memberId);
        reviewDto.setBook(bookService.findBook(bookId));
        reviewDto.setMember(member);

        Review review = reviewMapper.reviewDtoToReview(reviewDto);
        review.setMember(member);
        member.updateMemberPoint(review);
        reviewService.createReview(review);


        ReviewResponseDto response =
                reviewMapper.reviewToReviewResponseDto(review);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    // review 수정
    @PatchMapping("/{bookId}")
    public ResponseEntity modifyReview(@PathVariable Long bookId,
                                       @RequestBody ReviewDto reviewDto){
        Book book = bookService.findBook(bookId);
        reviewDto.setBook(book);

        Review review = reviewMapper.reviewDtoToReview(reviewDto);
        reviewService.modifiedReview(review);

        ReviewResponseDto response =
                reviewMapper.reviewToReviewResponseDto(review);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    // review 삭제 ..
    @DeleteMapping("/{reviewId}")
    public void deleteReview(@PathVariable Long reviewId,
                             @LoginAccountId Long memberId) {
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

    @GetMapping("/{bookId}")
    public ResponseEntity getReviews(@PathVariable Long bookId,
                                     @Positive @RequestParam int page){
        Book book = bookService.findBook(bookId);
        Page<Review> pageReviews = reviewService.findReviews(book.getBookId(),page-1, 5);
        List<Review> reviews = pageReviews.getContent();

        return new ResponseEntity(
                new MultiResponseDto<>(reviewMapper.reviewsToReviewResponseDtos(reviews),pageReviews),
                HttpStatus.OK);
    }
}