package com.seb40_main_031.domain.member.dto;

import com.seb40_main_031.domain.books.dto.BookToMemberResponse;
import com.seb40_main_031.domain.review.dto.ReviewToMemberResponse;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.List;

public class MemberDto {
    @Getter
    @AllArgsConstructor
    public static class Post {
        @Email
        @NotBlank
        private String email;

        @NotBlank(message = "비밀번호를 입력해 주세요.")
        private String password;

        @NotBlank
        private String nickname;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Patch {
        private Long memberId;
        private String nickname;
        private String about;
        private String img;
        private int point;
    }

    @Getter
    @AllArgsConstructor
    public static class Response {
        private Long memberId;
        private String email;
        private String nickname;
        private String about;
        private int point;
        private String img;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
    }

    @AllArgsConstructor
    @Getter
    @Setter
    public static class MyPageResponse {
        private Long memberId;
        private String email;
        private String nickname;
        private String about;
        private String img;
        private int bookCount;
        private List<BookToMemberResponse> bookList;
        private int reviewCount;
        private List<ReviewToMemberResponse> reviewList;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
    }
}
