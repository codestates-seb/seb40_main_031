package com.seb40_main_031.likes.service;

import com.seb40_main_031.domain.member.entity.Member;
import com.seb40_main_031.domain.member.service.MemberService;
import com.seb40_main_031.global.error.exception.BusinessLogicException;
import com.seb40_main_031.global.error.exception.ExceptionCode;
import com.seb40_main_031.likes.dto.LikesDto;
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

    public void updateLikes(LikesDto likesDto) {
        // 컨트롤러로 받은 reviewId, memberId 로 review 랑 member 있는지 확인
        Review review = reviewService.findReview(likesDto.getReviewId());
        Member member = memberService.findMember(likesDto.getMemberId());
        // review, member 가 있다면 likeRepository 에서 해당하는 likeId 찾기 없다면 null 로 들어옴.
        Optional<Likes> findLikes =
                likesRepository.findByReviewAndMember(review, member);

        findLikes.ifPresentOrElse(
                likes -> {
                    // review 의 Like 합계에서 -1 하게 likes를 삭제하고, likesCount 를 새로 size 세팅하기
                    review.discountLike(likes);
                    // likeRepository 에서 likeId 지우기
                    likesRepository.delete(likes);
                },
                () -> {
                    // null 일때 새로운 like 를 만들기
                    Likes likes = Likes.builder().build();
                    // likes 에 review를 저장하기
                    likes.mappingReview(review);
                    // likes 에 member를 저장하기
                    likes.mappingMember(member);
                    // review 에 likeCount에 +1 할 수있게 size 업데이트하기
                    review.updateLikeCount();
                    likesRepository.save(likes);
                }
        );
    }

    private Likes findVerifiedLikes(long likeId){
        Optional<Likes> optionalLikes =
                likesRepository.findById(likeId);
        Likes findLikes = optionalLikes.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.LIKES_NOT_FOUND));

        return findLikes;
    }
}
