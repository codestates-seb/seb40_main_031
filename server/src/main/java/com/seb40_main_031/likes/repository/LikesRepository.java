package com.seb40_main_031.likes.repository;

import com.seb40_main_031.domain.member.entity.Member;
import com.seb40_main_031.likes.entity.Likes;
import com.seb40_main_031.review.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LikesRepository extends JpaRepository<Likes, Long> {
    Optional<Likes> findByReviewAndMember(Review review, Member member);

}
