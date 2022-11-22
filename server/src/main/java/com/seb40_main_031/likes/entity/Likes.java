package com.seb40_main_031.likes.entity;

import com.seb40_main_031.review.entity.Review;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
public class Likes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long likesId;

    private long memberId;

    @ManyToOne
    @JoinColumn(name = "review_id")
    private Review review;

    @Column
    private long likesCount; // 1 or 0이 될 것
}
