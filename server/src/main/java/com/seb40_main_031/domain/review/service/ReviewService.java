package com.seb40_main_031.domain.review.service;

import com.seb40_main_031.domain.member.entity.Member;
import com.seb40_main_031.domain.member.service.MemberService;
import com.seb40_main_031.global.error.exception.BusinessLogicException;
import com.seb40_main_031.global.error.exception.ExceptionCode;
import com.seb40_main_031.domain.review.entity.Review;
import com.seb40_main_031.domain.review.repository.ReviewRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ReviewService {

    private final ReviewRepository reviewRepository;
    private final MemberService memberService;

    public ReviewService(ReviewRepository reviewRepository,MemberService memberService) {
        this.reviewRepository = reviewRepository;
        this.memberService = memberService;
    }

    // 리뷰 생성
    public Review createReview(Review review){
        return reviewRepository.save(review);
    }


    // 리뷰 수정
    public Review modifiedReview(Review review, Long memberId) {
        Review findReview = findReview(review.getReviewId());

        try {
            if(findReview.getMember().getMemberId().equals(memberId)){
                findReview.setContent(review.getContent());
            } else {
                Exception e = new Exception();
                throw e;
            }
        } catch (Exception e) {
            throw new BusinessLogicException(ExceptionCode.REVIEW_MEMBER_NOT_MATCHED);
        }
        return reviewRepository.save(findReview);
    }

    // 리뷰 단일 찾기
    public Review findReview(long reviewId) {
        return findVerifiedReview(reviewId);
    }

    // 리뷰 리스트 찾기
    public Page<Review> findReviews(long bookId, int page, int size) {
        Pageable pageReview = PageRequest.of(page,size, Sort.by("reviewId").descending());
        return reviewRepository.findAllByBookBookId(bookId, pageReview);
    }

    // 리뷰 삭제
    public void deleteReview(long reviewId, long memberId){
        Review review = findVerifiedReview(reviewId);
        Member member = memberService.findMember(memberId);
        member.discountReviewPoint(review);
        reviewRepository.delete(review);
    }


    // 리뷰 여부 검증
    private Review findVerifiedReview(long reviewId){
        Optional<Review> optionalReview =
                reviewRepository.findById(reviewId);

        return optionalReview.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.REVIEW_NOT_FOUND));
    }

}
