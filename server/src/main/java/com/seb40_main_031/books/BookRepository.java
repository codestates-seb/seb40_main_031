package com.seb40_main_031.books;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    @Query(value = "SELECT * FROM BOOK where national_rank", nativeQuery = true)
    List<Book> findByNationalRank();
    @Query(value = "SELECT * FROM BOOK where foreign_rank", nativeQuery = true)
    List<Book> findByForeignRank();

    // SELECT * FROM BOOK where category_name like 'categoryName' order by pub_date DESC
    List<Book> findAllByCategoryNameStartingWithOrderByPubDateDesc(String categoryName);
}
