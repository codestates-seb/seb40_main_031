package com.seb40_main_031.domain.likes.controller;

import com.seb40_main_031.domain.likes.dto.LikesDto;
import com.seb40_main_031.domain.likes.dto.LikesResponseDto;
import com.seb40_main_031.domain.review.service.ReviewService;
import com.seb40_main_031.domain.likes.service.LikesService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class LikesController {
    private final LikesService likesService;
    private final ReviewService reviewService;

    public LikesController(LikesService likesService, ReviewService reviewService) {
        this.likesService = likesService;
        this.reviewService = reviewService;
    }

    @PatchMapping("/reviews/likes")
    public ResponseEntity patchLikes(@RequestBody LikesDto likesDto){

        likesService.updateLikes(likesDto);

        LikesResponseDto response = new LikesResponseDto();
        response.setLikeSum(reviewService.findReview(likesDto.getReviewId()).getLikeCount());

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
