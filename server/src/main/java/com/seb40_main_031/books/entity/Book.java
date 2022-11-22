package com.seb40_main_031.books.entity;

import com.seb40_main_031.review.entity.Review;
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

    @Column(name = "title", nullable = false)
    private String title;

    @Column(length = 1000)
    private String description;

    @Column(nullable = false)
    private String pubDate;

    @Column(nullable = false)
    private long price;

    private String coverSmallUrl;

    private String coverLargeUrl;

    @Column(nullable = false)
    private String categoryId;

    @Column(nullable = false)
    private String categoryName;

    @Column(nullable = false)
    private String bookPublisher;

    @Column(nullable = false)
    private String author;

    private String translator;

    @Column(nullable = false)
    private String isbn;

    @Column(name = "book_link")
    private String link;

    private Long nationalRank;

    private Long foreignRank;

    @OneToMany(mappedBy = "book")
    private List<Review> reviews = new ArrayList<>();

    private long reviewCount;
}
