package com.seb40_main_031.books.dto;



import com.seb40_main_031.review.dto.ReviewResponseDto;
import com.seb40_main_031.review.entity.Review;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@NoArgsConstructor
@Getter
@Setter
public class BookResponseDto {
    private long bookId;

    private String title;

    private String author;

    private String translator;

    private String bookPublisher;

    private String coverSmallUrl;

    private String coverLargeUrl;

    private String categoryId;

    private String categoryName;

    private String description;

    private String pubDate;

    private long price;

    private String isbn;

    private String link;

    private Long nationalRank;

    private Long foreignRank;

    private List<ReviewResponseDto> reviews;
    private long reviewCount;
}

