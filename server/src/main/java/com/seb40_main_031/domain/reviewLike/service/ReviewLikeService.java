package com.seb40_main_031.domain.reviewLike.service;

import com.seb40_main_031.domain.reviewLike.dto.ReviewLikeDto;
import com.seb40_main_031.domain.reviewLike.entity.ReviewLike;
import com.seb40_main_031.domain.member.entity.Member;
import com.seb40_main_031.domain.member.service.MemberService;
import com.seb40_main_031.domain.review.entity.Review;
import com.seb40_main_031.domain.review.service.ReviewService;
import com.seb40_main_031.domain.reviewLike.repository.ReviewLikeRepository;
import com.seb40_main_031.global.error.exception.BusinessLogicException;
import com.seb40_main_031.global.error.exception.ExceptionCode;
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

    public void updateLikes(ReviewLikeDto likeDto) {
        // 컨트롤러로 받은 reviewId, memberId 로 review 랑 member 있는지 확인
        Review review = reviewService.findReview(likeDto.getReviewId());
        Member member = memberService.findMember(likeDto.getMemberId());
        // review, member 가 있다면 likeRepository 에서 해당하는 likeId 찾기 없다면 null 로 들어옴.
        Optional<ReviewLike> findLike =
                likeRepository.findByReviewAndMember(review, member);

        findLike.ifPresentOrElse(
                reviewLike -> {
                    // review 의 Like 합계에서 -1 하게 likes를 삭제하고, likesCount 를 새로 size 세팅하기
                    review.discountLike(reviewLike);
                    // likeRepository 에서 likeId 지우기
                    likeRepository.delete(reviewLike);
                },
                () -> {
                    // null 일때 새로운 like 를 만들기
                    ReviewLike like = ReviewLike.builder().build();
                    // likes 에 review를 저장하기
                    like.mappingReview(review);
                    // likes 에 member를 저장하기
                    like.mappingMember(member);
                    // review 에 likeCount에 +1 할 수있게 size 업데이트하기
                    review.updateLikeCount();
                    likeRepository.save(like);
                }
        );
    }

    private ReviewLike findVerifiedLikes(long likeId){
        Optional<ReviewLike> optionalLike =
                likeRepository.findById(likeId);
        ReviewLike findLike = optionalLike.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.LIKES_NOT_FOUND));

        return findLike;
    }
}
