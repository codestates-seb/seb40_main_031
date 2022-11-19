package com.seb40_main_031.domain.member.dto;

import com.seb40_main_031.domain.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

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
//    @Builder    // 안에 쓸지 밖에 쓸지 좀 더 생각.
    public static class Patch {
        private Long memberId;
        private String nickname;
//        private String password;
        private String about;
        private String img;
        private int point;
        private Member.Roles roles;

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
        private Member.Roles roles;
//        private List<BookDto.Response> bookList;
//        private List<ReviewDto.Response> reviewList;


//        private Member.Roles roles;
    }

}
