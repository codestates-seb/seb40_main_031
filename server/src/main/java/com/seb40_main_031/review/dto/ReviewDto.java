package com.seb40_main_031.review.dto;


import com.seb40_main_031.books.entity.Book;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class ReviewDto {

    private long reviewId;
    private long memberId;
    private Book book;
    private String content;

}
