package com.seb40_main_031.review.repository;

import com.seb40_main_031.books.entity.Book;
import com.seb40_main_031.review.entity.Review;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
//      SELECT * FROM REVIEW where book_id = 1
    Page<Review> findAllByBookBookId(long bookId, Pageable pageable);
}
