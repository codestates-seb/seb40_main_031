package com.seb40_main_031.domain.member.entity;

import com.seb40_main_031.domain.reviewLike.entity.ReviewLike;
import com.seb40_main_031.global.common.auditing.Auditable;
import com.seb40_main_031.domain.review.entity.Review;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Member extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MEMBER_ID")
    private Long memberId;

    @Column(name = "EMAIL", nullable = false, unique = true)
    private String email;

    @Column(name = "PASSWORD")
    private String password;

    @Column(name = "NICKNAME")
    private String nickname;

    @Column(name = "ABOUT")
    private String about;

    @Column(name = "MEMBER_IMG")
    private String img;

    @Column(name = "POINT")
    private int point;

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "member", cascade = CascadeType.REMOVE)
    private List<ReviewLike> likes = new ArrayList<>();

    public void mappingMemberLike(ReviewLike like) {
        this.likes.add(like);
    }

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "member", cascade = CascadeType.REMOVE)
    private List<Review> reviews = new ArrayList<>();

    public Member(String email) {
        this.email = email;
    }

    public void updateMemberPoint(Review review){
        this.point += review.getPoint();
    }

    public void discountReviewPoint(Review review) {
        this.point -= review.getPoint();
    }
}
