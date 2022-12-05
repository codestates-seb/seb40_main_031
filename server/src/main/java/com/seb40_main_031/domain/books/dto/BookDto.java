package com.seb40_main_031.domain.books.dto;

import com.seb40_main_031.domain.review.dto.ReviewResponseDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
public class BookDto {
    private Long bookId;

    private Long memberId;

    private String title;

    private String description;

    private String pubDate;

    private long price;

    private String coverSmallUrl;

    private String coverLargeUrl;

    private String categoryId;

    private String categoryName;

    private String bookPublisher;

    private String author;

    private String translator;

    private String isbn;

    private String link;

    private Long nationalRank;

    private Long foreignRank;

    private List<ReviewResponseDto> reviews = new ArrayList<>();

    private long reviewCount;
}
