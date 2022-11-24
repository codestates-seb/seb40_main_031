package com.seb40_main_031.review.mapper;

import com.seb40_main_031.review.dto.ReviewDto;
import com.seb40_main_031.review.dto.ReviewResponseDto;
import com.seb40_main_031.review.entity.Review;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ReviewMapper {

    Review reviewDtoToReview(ReviewDto reviewDto);

    @Mapping(source = "review.book.bookId", target = "bookId")
    @Mapping(source = "review.member.memberId", target = "memberId")
    ReviewResponseDto reviewToReviewResponseDto(Review review);

    List<ReviewResponseDto> reviewsToReviewResponseDtos(List<Review> reviews);
}
