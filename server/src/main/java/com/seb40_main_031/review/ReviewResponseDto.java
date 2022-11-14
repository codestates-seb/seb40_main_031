package com.seb40_main_031.review;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class ReviewResponseDto {

    private long commentId;
    private long memberId;
    private long bookId;
    private String content;
    private LocalDateTime createdAt;
}
