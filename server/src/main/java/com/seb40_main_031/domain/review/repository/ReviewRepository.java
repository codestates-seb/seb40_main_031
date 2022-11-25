package com.seb40_main_031.domain.review.repository;

import com.seb40_main_031.domain.review.entity.Review;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
//      SELECT * FROM REVIEW where book_id = 1
    Page<Review> findAllByBookBookId(long bookId, Pageable pageable);

    Page<Review> findAllByMemberId(Long memberId, PageRequest reviewId);
}
