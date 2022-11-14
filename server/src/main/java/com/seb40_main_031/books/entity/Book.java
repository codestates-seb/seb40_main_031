package com.seb40_main_031.books.entity;

import com.seb40_main_031.review.Review;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "book_id")
    private long bookId;

    @Column(name = "member_id")
    private long memberId;

    private String title;

    @Column(length = 1000)
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

    @Column(name = "book_link")
    private String link;

    private long reviewCount;

    private Long nationalRank;

    private Long foreignRank;

    @OneToMany(mappedBy = "book")
    private List<Review> reviews = new ArrayList<>();


}
