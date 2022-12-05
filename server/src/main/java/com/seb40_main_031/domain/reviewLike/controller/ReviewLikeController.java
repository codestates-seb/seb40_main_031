package com.seb40_main_031.domain.reviewLike.controller;

import com.seb40_main_031.domain.review.service.ReviewService;
import com.seb40_main_031.domain.reviewLike.dto.ReviewLikeDto;
import com.seb40_main_031.domain.reviewLike.dto.ReviewLikeResponseDto;
import com.seb40_main_031.domain.reviewLike.service.ReviewLikeService;
import com.seb40_main_031.global.security.argumentresolver.LoginAccountId;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class ReviewLikeController {
    private final ReviewLikeService reviewLikeService;
    private final ReviewService reviewService;

    @PatchMapping("/reviews/likes")
    public ResponseEntity patchLikes(@LoginAccountId Long memberId,
                                     @RequestBody ReviewLikeDto likeDto){

        reviewLikeService.updateLikes(likeDto, memberId);

        ReviewLikeResponseDto response = new ReviewLikeResponseDto();
        response.setLikeSum(reviewService.findReview(likeDto.getReviewId()).getLikeCount());

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
