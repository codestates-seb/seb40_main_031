package com.seb40_main_031.domain.review.dto;


import com.seb40_main_031.domain.books.entity.Book;
import com.seb40_main_031.domain.member.entity.Member;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ReviewDto {

    private Long reviewId;
    private Member member;
    private Book book;
    private String content;

}
