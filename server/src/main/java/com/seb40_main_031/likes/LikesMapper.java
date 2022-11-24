package com.seb40_main_031.likes;


import com.seb40_main_031.likes.entity.Likes;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface LikesMapper {

    Likes likesDtoToLikes(LikesDto likesDto);

    LikesResponseDto likesToLikesResponseDto(Likes likes);
}
