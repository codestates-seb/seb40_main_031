package com.seb40_main_031.domain.reviewLike.repository;

import com.seb40_main_031.domain.member.entity.Member;
import com.seb40_main_031.domain.review.entity.Review;
import com.seb40_main_031.domain.reviewLike.entity.ReviewLike;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ReviewLikeRepository extends JpaRepository<ReviewLike, Long> {
    Optional<ReviewLike> findByReviewAndMember(Review review, Member member);

}
