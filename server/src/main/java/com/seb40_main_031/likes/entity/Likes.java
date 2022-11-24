package com.seb40_main_031.likes.entity;

import com.seb40_main_031.domain.member.entity.Member;
import com.seb40_main_031.review.entity.Review;
import lombok.*;

import javax.persistence.*;

import static javax.persistence.FetchType.LAZY;

@Getter
@Setter
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "LIKES")
public class Likes {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long likeId;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "ReviewId", foreignKey = @ForeignKey(name = "FkReviewLikeReview"))
    private Review review;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "MemberId", foreignKey = @ForeignKey(name = "FkMemberLikeMember"))
    private Member member;

    private long likeStatus; // 0 not push or 1 push

    public void mappingMember(Member member){
        this.member = member;
        member.mappingMemberLike(this);
    }
    public void mappingReview(Review review){
        this.review = review;
        review.mappingReviewLike(this);
    }
}
