package com.seb40_main_031.books.repository;

import com.seb40_main_031.books.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    Optional<Book> findByBookId(long bookId);

    @Query(value = "SELECT * FROM BOOK where national_rank", nativeQuery = true)
    List<Book> findByNationalRank();
    @Query(value = "SELECT * FROM BOOK where foreign_rank", nativeQuery = true)
    List<Book> findByForeignRank();

    // SELECT * FROM BOOK where category_name like 'categoryName' order by pub_date DESC
    List<Book> findAllByCategoryNameStartingWithOrderByPubDateDesc(String categoryName);

    List<Book> findByTitleContaining(String keyword);

}
