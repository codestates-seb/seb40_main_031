package com.seb40_main_031.books;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BookService {
    private final BookRepository bookRepository;

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    // 베스트 셀러 찾기
    public List<Book> findAllBestSeller(long categoryId){
        List<Book> findBooks = new ArrayList<>();
        if(categoryId == 100) findBooks = bookRepository.findByNationalRank();
        if(categoryId == 200) findBooks = bookRepository.findByForeignRank();

        return findBooks;
    }

    // 신간 찾기
    public List<Book> findAllNewBook(long categoryId) {
        // 새로운 book list 생성
        List<Book> findBooks = new ArrayList<>();
        // 카테고리가 100 이면 국내도서 신간 조회 , 200 이면 외국도서 신간 조회
        if(categoryId == 100){
            findBooks = bookRepository.findAllByCategoryNameStartingWithOrderByPubDateDesc("국내도서");
        }
        if(categoryId == 200){
            findBooks = bookRepository.findAllByCategoryNameStartingWithOrderByPubDateDesc("외국도서");
        }
        return findBooks;
    }

}
