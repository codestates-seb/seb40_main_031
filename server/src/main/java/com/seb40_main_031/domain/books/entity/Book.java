package com.seb40_main_031.domain.books.entity;

import com.seb40_main_031.domain.review.entity.Review;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "BOOK_ID")
    private Long bookId;

    @Column(name = "member_id")
    private Long memberId;

    @Column(name = "TITLE",nullable = false)
    private String title;

    @Column(name = "DESCRIPTION",length = 1000)
    private String description;

    @Column(name = "PUB_DATE",nullable = false)
    private String pubDate;

    @Column(name = "PRICE",nullable = false)
    private long price;

    @Column(name = "COVER_SMALL_URL")
    private String coverSmallUrl;

    @Column(name = "COVER_LARGE_URL")
    private String coverLargeUrl;

    @Column(name = "CATEGORY_ID")
    private String categoryId;

    @Column(name = "CATEGORY_NAME",nullable = false)
    private String categoryName;

    @Column(name = "BOOK_PUBLISHER",nullable = false)
    private String bookPublisher;

    @Column(name = "AUTHOR",nullable = false)
    private String author;

    @Column(name = "TRANSLATOR")
    private String translator;

    @Column(name = "ISBN")
    private String isbn;

    @Column(name = "BOOK_LINK")
    private String link;

    @Column(name = "NATIONAL_RANK")
    private Long nationalRank;

    @Column(name = "FOREIGN_RANK")
    private Long foreignRank;

    @OneToMany(mappedBy = "book")
    private List<Review> reviews = new ArrayList<>();

    @Column(name = "REVIEW_COUNT")
    private long reviewCount;

    public void updateReviewCount(){
        this.reviewCount = this.reviews.size();
    }

}
