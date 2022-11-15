package com.seb40_main_031.review.entity;

import com.seb40_main_031.books.entity.Book;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

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
}
