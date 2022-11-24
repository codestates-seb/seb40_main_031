package com.seb40_main_031.likes.controller;

import com.seb40_main_031.likes.LikesPatchDto;
import com.seb40_main_031.likes.LikesResponseDto;
import com.seb40_main_031.likes.entity.Likes;
import com.seb40_main_031.likes.service.LikesService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class LikesController {
    private final LikesService likesService;

    public LikesController(LikesService likesService) {
        this.likesService = likesService;
    }

    @PatchMapping("/reviews/likes")
    public ResponseEntity patchLikes(@RequestBody LikesPatchDto patchDto){
        likesService.updateLikes(patchDto.getReviewId(), patchDto.getMemberId());

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
