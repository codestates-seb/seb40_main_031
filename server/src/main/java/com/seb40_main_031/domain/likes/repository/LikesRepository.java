package com.seb40_main_031.domain.likes.repository;

import com.seb40_main_031.domain.likes.entity.Likes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LikesRepository extends JpaRepository<Likes, Long> {

    Likes findByLikesId(long likesId);
}
