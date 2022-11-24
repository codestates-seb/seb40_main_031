package com.seb40_main_031.likes.service;

import com.seb40_main_031.domain.member.entity.Member;
import com.seb40_main_031.domain.member.service.MemberService;
import com.seb40_main_031.likes.entity.Likes;
import com.seb40_main_031.likes.repository.LikesRepository;
import com.seb40_main_031.review.entity.Review;
import com.seb40_main_031.review.service.ReviewService;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LikesService {

    private final LikesRepository likesRepository;
    private final MemberService memberService;
    private final ReviewService reviewService;

    public LikesService(LikesRepository likesRepository, MemberService memberService,
                        ReviewService reviewService) {
        this.likesRepository = likesRepository;
        this.memberService = memberService;
        this.reviewService = reviewService;
    }

    public void updateLikes(long reviewId, long memberId) {
        Review review = reviewService.findReview(reviewId);
        Member member = memberService.findMember(memberId);
        Optional<Likes> findLikes = likesRepository.findByReviewAndMember(review, member);

        findLikes.ifPresentOrElse(
                likes -> {
                    likes.setLikeStatus(0);
                    review.discountLike(likes);
                    likesRepository.delete(likes);
                },
                () -> {
                    Likes likes = Likes.builder().build();
                    likes.mappingReview(review);
                    likes.mappingMember(member);
                    likes.setLikeStatus(1);
                    review.updateLikeCount();

                    likesRepository.save(likes);
                }
        );
    }
}
