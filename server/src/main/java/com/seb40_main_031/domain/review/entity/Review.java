package com.seb40_main_031.domain.review.entity;

import com.seb40_main_031.domain.books.entity.Book;
import com.seb40_main_031.domain.member.entity.Member;
import com.seb40_main_031.domain.reviewLike.entity.ReviewLike;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.FetchType.LAZY;

@Getter
@Setter
@Entity
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "REVIEW_ID")
    private Long reviewId;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "BOOK_ID")
    private Book book;

    @Column(length = 500)
    private String content;

    @Column(name = "CREATED_AT")
    private LocalDateTime createdAt = LocalDateTime.now();
    @Column(name = "MODIFIED_AT")
    private LocalDateTime modifiedAt = LocalDateTime.now();

    @Transient
    private int point = 10;

    @OneToMany(fetch = LAZY, mappedBy = "review", cascade = CascadeType.REMOVE)
    private List<ReviewLike> likes = new ArrayList<>();

    private long likeCount;
    public void mappingReviewLike(ReviewLike like) {
        this.likes.add(like);
    }
    public void updateLikeCount() {
        this.likeCount = this.likes.size();
    }
    public void discountLike(ReviewLike like) {
        this.likes.remove(like);
        this.likeCount = this.likes.size();
    }
}
