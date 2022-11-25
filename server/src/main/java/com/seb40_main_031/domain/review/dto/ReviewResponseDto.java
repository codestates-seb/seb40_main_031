package com.seb40_main_031.domain.review.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class ReviewResponseDto {

    private long reviewId;
    private long memberId;
    private long bookId;
    private String content;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
    private long likeCount;

}
