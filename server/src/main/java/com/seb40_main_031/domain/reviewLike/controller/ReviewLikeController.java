package com.seb40_main_031.domain.reviewLike.controller;

import com.seb40_main_031.domain.review.service.ReviewService;
import com.seb40_main_031.domain.reviewLike.dto.ReviewLikeDto;
import com.seb40_main_031.domain.reviewLike.dto.ReviewLikeResponseDto;
import com.seb40_main_031.domain.reviewLike.service.ReviewLikeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class ReviewLikeController {
    private final ReviewLikeService reviewLikeService;
    private final ReviewService reviewService;

    public ReviewLikeController(ReviewLikeService reviewLikeService, ReviewService reviewService) {
        this.reviewLikeService = reviewLikeService;
        this.reviewService = reviewService;
    }

    @PatchMapping("/reviews/likes")
    public ResponseEntity patchLikes(@RequestBody ReviewLikeDto likeDto){

        reviewLikeService.updateLikes(likeDto);

        ReviewLikeResponseDto response = new ReviewLikeResponseDto();
        response.setLikeSum(reviewService.findReview(likeDto.getReviewId()).getLikeCount());

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
