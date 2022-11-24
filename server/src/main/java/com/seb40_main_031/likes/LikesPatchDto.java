package com.seb40_main_031.likes;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LikesPatchDto {

    private long reviewId;
    private long memberId;
    private long likeCount; // 0 or 1
}
