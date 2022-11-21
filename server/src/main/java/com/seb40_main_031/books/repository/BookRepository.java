package com.seb40_main_031.books.repository;

import com.seb40_main_031.books.entity.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    Optional<Book> findByBookId(long bookId);

    @Query(value = "SELECT * FROM BOOK where national_rank", nativeQuery = true)
    List<Book> findAllByNationalRank();
    @Query(value = "SELECT * FROM BOOK where foreign_rank", nativeQuery = true)
    List<Book> findAllByForeignRank();

    // SELECT * FROM BOOK where category_name like 'categoryName' order by pub_date DESC
    List<Book> findAllByCategoryNameStartingWithOrderByPubDateDesc(String categoryName);

    // SELECT * FROM BOOK where title = '%keyword%'
    List<Book> findByTitleContaining(String keyword);

//    @Query(value = "SELECT * FROM Book WHERE title like '%keyword%'", nativeQuery = true )
    Page<Book> findAllByTitleContaining(String keyword, Pageable pageable);
    Page<Book> findAllByAuthorContaining(String keyword, Pageable pageable);

    Book findByTitle(String keyword);


}
