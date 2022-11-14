package com.seb40_main_031.books;

public class BusinessLogicException extends RuntimeException {

    private ExceptionCode exceptionCode;
    public BusinessLogicException(ExceptionCode exceptionCode) {

    }
}
