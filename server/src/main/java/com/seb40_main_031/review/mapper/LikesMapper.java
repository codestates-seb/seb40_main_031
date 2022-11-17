package com.seb40_main_031.review.mapper;

import com.seb40_main_031.review.Likes;
import com.seb40_main_031.review.dto.LikesDto;
import com.seb40_main_031.review.dto.LikesResponseDto;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface LikesMapper {

    Likes likesDtoToLikes(LikesDto likesDto);

    LikesResponseDto likesToLikesResponseDto(Likes likes);
}
