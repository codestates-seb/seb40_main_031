package com.seb40_main_031.book;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookId;

    private String title;

    @Column(length = 1000)
    private String description;

    private String pubDate;
    private int price;
    private String url1;
    private String url2;
    private long categoryId;
    private String categoryName;
    private String publisher;
    private String author;
    private String translator;
    private String isbn;
    private String link;

    @Column(unique = true, nullable = true)
    private Long rank;

}
