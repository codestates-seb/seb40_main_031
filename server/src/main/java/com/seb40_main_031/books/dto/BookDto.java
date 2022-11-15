package com.seb40_main_031.books.dto;

import com.seb40_main_031.review.Review;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
public class BookDto {
    private long bookId;

    private long memberId;

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

    private long reviewCount;

    private Long nationalRank;

    private Long foreignRank;

    private List<Review> reviews = new ArrayList<>();

}
