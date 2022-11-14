package com.seb40_main_031.books;

import lombok.Getter;

public enum ExceptionCode {

    Book_NOT_FOUND(404, "Book not found");


    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message){
        this.status = code;
        this.message = message;
    }
}
