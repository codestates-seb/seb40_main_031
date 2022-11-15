package com.seb40_main_031.review.service;

import com.seb40_main_031.books.BusinessLogicException;
import com.seb40_main_031.books.ExceptionCode;
import com.seb40_main_031.books.entity.Book;
import com.seb40_main_031.books.service.BookService;
import com.seb40_main_031.review.dto.ReviewDto;
import com.seb40_main_031.review.entity.Review;
import com.seb40_main_031.review.repository.ReviewRepository;
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



    // 리뷰 단일 찾기

    // 리뷰 리스트 찾기

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
