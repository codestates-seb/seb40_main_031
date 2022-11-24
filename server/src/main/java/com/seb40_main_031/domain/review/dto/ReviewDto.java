package com.seb40_main_031.domain.review.dto;


import com.seb40_main_031.domain.books.entity.Book;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ReviewDto {

    private long reviewId;
    private long memberId;
    private Book book;
    private String content;

}
