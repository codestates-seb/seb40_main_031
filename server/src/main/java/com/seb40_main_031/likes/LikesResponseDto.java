package com.seb40_main_031.likes;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LikesResponseDto {
    private long likesId;
    private long memberId;
    private long reviewId;
    private long likesCount;
}
