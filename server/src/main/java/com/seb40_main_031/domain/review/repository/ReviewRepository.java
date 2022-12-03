package com.seb40_main_031.domain.review.repository;

import com.seb40_main_031.domain.review.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;



@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {

    List<Review> findAllByBookBookIdOrderByLikeCountDescReviewIdDesc(Long bookId);
    List<Review> findAllByMemberMemberIdOrderByReviewIdDesc(Long memberId);
    @Query(value = "SELECT book_id FROM review where member_id GROUP BY book_id ORDER BY MAX(created_at) DESC", nativeQuery = true)
    List<Long> findAllReviewedBookIdByMemberId(@Param("member_id") Long memberId);

}
