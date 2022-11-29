package com.seb40_main_031.domain.books.repository;

import com.seb40_main_031.domain.books.entity.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

//@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    Optional<Book> findByBookId(long bookId);

    @Query(value = "SELECT * FROM book where national_rank", nativeQuery = true)
    List<Book> findAllByNationalRank();
    @Query(value = "SELECT * FROM book where foreign_rank", nativeQuery = true)
    List<Book> findAllByForeignRank();

    // SELECT * FROM BOOK where category_name like 'categoryName' order by pub_date DESC
    List<Book> findAllByCategoryNameStartingWithOrderByPubDateDesc(String categoryName);

    // title 로 찾기 // SELECT * FROM BOOK where title = '%keyword%'
    Page<Book> findByTitleContaining(String keyword, Pageable pageable);
    // author 로 찾기
    Page<Book> findByAuthorContaining(String keyword, Pageable pageable);

    Book findByTitle(String keyword);
}
