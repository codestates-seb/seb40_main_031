package com.seb40_main_031.review.dto;

import com.seb40_main_031.likes.LikesResponseDto;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
public class ReviewResponseDto {

    // reviewId로 변경
    private long reviewId;
    private long memberId;
    private long bookId;
    private String content;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
    private List<LikesResponseDto> likesResponseDtoList;
}
