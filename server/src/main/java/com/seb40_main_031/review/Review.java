package com.seb40_main_031.review;


import com.seb40_main_031.books.entity.Book;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "review_id")
    private Long id;

    @Column(name = "member_id")
    private Long memberId;

    // book 이 여러개의 리뷰를 가진다.
    @ManyToOne
    @JoinColumn(name = "book_id")
    private Book book;

    @Column(length = 500)
    private String content;

    private LocalDateTime localDateTime;
}
