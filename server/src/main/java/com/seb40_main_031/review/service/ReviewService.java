package com.seb40_main_031.review.service;

import com.seb40_main_031.global.error.exception.BusinessLogicException;
import com.seb40_main_031.global.error.exception.ExceptionCode;
import com.seb40_main_031.review.entity.Review;
import com.seb40_main_031.review.repository.ReviewRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ReviewService {

    private final ReviewRepository reviewRepository;

    public ReviewService(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    // 리뷰 생성
    public Review createReview(Review review){
        return reviewRepository.save(review);
    }


    // 리뷰 수정
    public Review modifiedReview(Review review) {
        Review findReview = findVerifiedReview(review.getReviewId());
        findReview.setContent(review.getContent());

        return reviewRepository.save(findReview);
    }

    // 리뷰 단일 찾기
    public Review findReview(long reviewId) {
        Review findReview = findVerifiedReview(reviewId);
        return findReview;
    }

    // 리뷰 리스트 찾기
    public Page<Review> findReviews(long bookId, int page, int size) {
        return reviewRepository.findAll(
                PageRequest.of(page,size, Sort.by("reviewId").descending()));
    }

    // 리뷰 삭제
    public void deleteReview(long reviewId, long memberId){
        Review review = findVerifiedReview(reviewId);
        if(review.getMemberId() == memberId) reviewRepository.delete(review);
    }


    // 리뷰 여부 검증
    private Review findVerifiedReview(long reviewId){
        Optional<Review> optionalReview =
                reviewRepository.findById(reviewId);
        Review findReview = optionalReview.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.REVIEW_NOT_FOUND));

        return findReview;
    }

}
