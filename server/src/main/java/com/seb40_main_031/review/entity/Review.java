package com.seb40_main_031.review.entity;

import com.seb40_main_031.books.entity.Book;

import com.seb40_main_031.domain.member.entity.Member;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "REVIEW_ID")
    private long reviewId;

//    @ManyToOne
//    @JoinColumn(name = "MEMBER_ID")
//    private Member member;

    private long memberId;

    // book 이 여러개의 리뷰를 가진다.
    @ManyToOne
    @JoinColumn(name = "BOOK_ID")
    private Book book;

    @Column(length = 500)
    private String content;

    private LocalDateTime createdAt = LocalDateTime.now();

    private LocalDateTime modifiedAt = LocalDateTime.now();

}
