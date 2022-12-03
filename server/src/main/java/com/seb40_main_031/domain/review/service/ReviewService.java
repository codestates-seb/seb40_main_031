package com.seb40_main_031.domain.review.service;

import com.seb40_main_031.domain.member.entity.Member;
import com.seb40_main_031.domain.member.service.MemberService;
import com.seb40_main_031.global.error.exception.BusinessLogicException;
import com.seb40_main_031.global.error.exception.ExceptionCode;
import com.seb40_main_031.domain.review.entity.Review;
import com.seb40_main_031.domain.review.repository.ReviewRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReviewService {

    private final ReviewRepository reviewRepository;
    private final MemberService memberService;

    public ReviewService(ReviewRepository reviewRepository,MemberService memberService) {
        this.reviewRepository = reviewRepository;
        this.memberService = memberService;
    }

    public Review createReview(Review review){
        return reviewRepository.save(review);
    }

    public Review modifiedReview(Review review, Long memberId) {
        Review findReview = findReview(review.getReviewId());

        try {
            if(findReview.getMember().getMemberId().equals(memberId)){
                findReview.setContent(review.getContent());
            } else {
                throw new Exception();
            }
        } catch (Exception e) {
            throw new BusinessLogicException(ExceptionCode.REVIEW_MEMBER_NOT_MATCHED);
        }
        return reviewRepository.save(findReview);
    }

    public Review findReview(Long reviewId) {
        return findVerifiedReview(reviewId);
    }

    public List<Review> findReviews(Long bookId){
        return reviewRepository.findAllByBookBookIdOrderByLikeCountDescReviewIdDesc(bookId);
    }

    public void deleteReview(Long reviewId, Long memberId){
        Review review = findVerifiedReview(reviewId);
        Member member = memberService.findMember(memberId);
        member.discountReviewPoint(review);
        reviewRepository.delete(review);
    }

    private Review findVerifiedReview(Long reviewId){
        Optional<Review> optionalReview =
                reviewRepository.findById(reviewId);

        return optionalReview.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.REVIEW_NOT_FOUND));
    }

}
