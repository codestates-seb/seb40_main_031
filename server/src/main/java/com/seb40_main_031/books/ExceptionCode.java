package com.seb40_main_031.books;

import lombok.Getter;

public enum ExceptionCode {

    BOOK_NOT_FOUND(404, "Book not found"),
    REVIEW_NOT_FOUND(404, "Review not found");


    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message){
        this.status = code;
        this.message = message;
    }
}
