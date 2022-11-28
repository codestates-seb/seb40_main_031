package com.seb40_main_031.domain.reviewLike.entity;

import com.seb40_main_031.domain.member.entity.Member;
import com.seb40_main_031.domain.review.entity.Review;
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
public class ReviewLike {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long likeId;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "ReviewId", foreignKey = @ForeignKey(name = "FkReviewLikeReview"))
    private Review review;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "MemberId", foreignKey = @ForeignKey(name = "FkMemberLikeMember"))
    private Member member;

    public void mappingMember(Member member){
        this.member = member;
        member.mappingMemberLike(this);
    }
    public void mappingReview(Review review){
        this.review = review;
        review.mappingReviewLike(this);
    }
}
