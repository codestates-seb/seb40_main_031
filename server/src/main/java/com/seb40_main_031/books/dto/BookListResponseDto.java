package com.seb40_main_031.books.dto;



import com.seb40_main_031.review.dto.ReviewResponseDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@NoArgsConstructor
@Getter
@Setter
public class BookListResponseDto {

    private long bookId;

    private String title;

    private String author;

    private long price;

    private Long nationalRank;

    private Long foreignRank;

    private String coverSmallUrl;

    private String coverLargeUrl;

}

