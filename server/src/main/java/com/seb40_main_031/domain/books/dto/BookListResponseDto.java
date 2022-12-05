package com.seb40_main_031.domain.books.dto;



import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class BookListResponseDto {

    private Long bookId;
    private String title;
    private String author;
    private long price;
    private Long nationalRank;
    private Long foreignRank;
    private String coverSmallUrl;
    private String coverLargeUrl;

}

