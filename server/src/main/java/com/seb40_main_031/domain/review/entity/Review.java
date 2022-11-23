package com.seb40_main_031.domain.review.entity;

import com.seb40_main_031.domain.books.entity.Book;

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
    private long reviewId;

    @Column(name = "member_id")
    private long memberId;

    // book 이 여러개의 리뷰를 가진다.
    @ManyToOne
    @JoinColumn(name = "book_id")
    private Book book;

    @Column(length = 500)
    private String content;

    private LocalDateTime createdAt = LocalDateTime.now();

    private LocalDateTime modifiedAt = LocalDateTime.now();

//    @OneToMany(mappedBy = "review")
//    private long likes; // 이 review에 들어가는 like 합계수
//    private List<Likes> likes = new ArrayList<>();
}