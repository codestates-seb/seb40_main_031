package com.seb40_main_031.global.error.exception;

import lombok.Getter;

public enum ExceptionCode {

    MEMBER_NOT_FOUND(404, "Member Not Found"),
    MEMBER_EXISTS(409, "Member Exists"),
    CANNOT_CHANGE_MEMBER(403, "Member can not change"),
    MEMBER_DORMANT(409, "Member is dormant"),
    INVALID_MEMBER_STATUS(400, "Invalid Member Status"),
    INVALID_PASSWORD(404, "Invalid Password"),
    NOT_AUTHORIZED(401, "Not Authorized"),

    BOOK_NOT_FOUND(404, "Book Not Found"),
    BOOK_EXISTS(409, "Book Exists"),

    REVIEW_NOT_FOUND(404, "Review Not Found"),
    REVIEW_MEMBER_NOT_MATCHED(404, "Member is Not matched"),
    LIKES_NOT_FOUND(404, "Likes Not Found"),

    NOT_IMPLEMENTATION(501, "Not Implementation");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}
