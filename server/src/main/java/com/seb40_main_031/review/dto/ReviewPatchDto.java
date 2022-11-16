package com.seb40_main_031.review.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ReviewPatchDto {

    private long reviewId;
    private long memberId;
    private String content;

}
