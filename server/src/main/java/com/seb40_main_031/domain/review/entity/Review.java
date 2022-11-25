package com.seb40_main_031.domain.review.entity;

import com.seb40_main_031.domain.books.entity.Book;
import com.seb40_main_031.domain.member.entity.Member;
import com.seb40_main_031.domain.likes.entity.Likes;

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

    @Column(name = "review_id")
    private long reviewId;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "book_id")
    private Book book;

    @Column(length = 500)
    private String content;

    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();
    @Column(name = "modified_at")
    private LocalDateTime modifiedAt = LocalDateTime.now();

    @Transient // DB column 에 추가하지않는다.
    private int point = 10;

    @OneToMany(fetch = LAZY, mappedBy = "review", cascade = CascadeType.REMOVE)
    private List<Likes> likes = new ArrayList<>();

    private long likeCount;
    public void mappingReviewLike(Likes likes) {
        this.likes.add(likes);
    }
    public void updateLikeCount() {
        this.likeCount = this.likes.size();
    }
    public void discountLike(Likes likes) {
        this.likes.remove(likes);
        this.likeCount = this.likes.size();

    }
}
