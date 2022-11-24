package com.seb40_main_031.likes.controller;

import com.seb40_main_031.likes.dto.LikesDto;
import com.seb40_main_031.likes.dto.LikesResponseDto;
import com.seb40_main_031.likes.service.LikesService;
import com.seb40_main_031.review.service.ReviewService;
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
