package com.seb40_main_031.domain.review.mapper;

import com.seb40_main_031.domain.review.dto.ReviewDto;
import com.seb40_main_031.domain.review.dto.ReviewResponseDto;
import com.seb40_main_031.domain.review.dto.ReviewToMemberResponse;
import com.seb40_main_031.domain.review.entity.Review;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ReviewMapper {


    @Mapping(source = "reviewDto.member", target = "member")
    Review reviewDtoToReview(ReviewDto reviewDto);

    @Mapping(source = "review.book.bookId", target = "bookId")
    @Mapping(source = "review.member.memberId", target = "memberId")
    @Mapping(source = "review.member.nickname", target = "nickname")
    ReviewResponseDto reviewToReviewResponseDto(Review review);

    List<ReviewResponseDto> reviewsToReviewResponseDtos(List<Review> reviews);

    @Mapping(source = "review.book.bookId", target = "bookId")
    ReviewToMemberResponse reviewToReviewMemberResponse(Review review);
}
