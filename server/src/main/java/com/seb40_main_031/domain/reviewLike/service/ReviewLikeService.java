package com.seb40_main_031.domain.reviewLike.service;

import com.seb40_main_031.domain.reviewLike.dto.ReviewLikeDto;
import com.seb40_main_031.domain.reviewLike.entity.ReviewLike;
import com.seb40_main_031.domain.member.entity.Member;
import com.seb40_main_031.domain.member.service.MemberService;
import com.seb40_main_031.domain.review.entity.Review;
import com.seb40_main_031.domain.review.service.ReviewService;
import com.seb40_main_031.domain.reviewLike.repository.ReviewLikeRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ReviewLikeService {

    private final ReviewLikeRepository likeRepository;
    private final MemberService memberService;
    private final ReviewService reviewService;

    public ReviewLikeService(ReviewLikeRepository likeRepository, MemberService memberService,
                             ReviewService reviewService) {
        this.likeRepository = likeRepository;
        this.memberService = memberService;
        this.reviewService = reviewService;
    }

    public void updateLikes(ReviewLikeDto likeDto, Long memberId) {
        Review review = reviewService.findReview(likeDto.getReviewId());
        Member member = memberService.findMember(memberId);

        Optional<ReviewLike> findLike =
                likeRepository.findByReviewAndMember(review, member);

        findLike.ifPresentOrElse(
                reviewLike -> {
                    review.discountLike(reviewLike);
                    likeRepository.delete(reviewLike);
                },
                () -> {
                    ReviewLike like = ReviewLike.builder().build();
                    like.mappingReview(review);
                    like.mappingMember(member);
                    review.updateLikeCount();
                    likeRepository.save(like);
                }
        );
    }
}
