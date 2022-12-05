package com.seb40_main_031.domain.review.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class ReviewToMemberResponse {

    private Long reviewId;
    private Long memberId;
    private Long bookId;
    private String content;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
}
