package com.seb40_main_031.books;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "book_id")
    private Long id;

    @Column(name = "member_id")
    private Long memberId;

    private String title;

    @Column(length = 1000)
    private String description;

    private String pubDate;

    private Long price;

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

    private Long reviewCount;

    private Long nationalRank;

    private Long foreignRank;


}
