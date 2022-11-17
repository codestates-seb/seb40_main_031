package com.seb40_main_031.member.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

public class MemberDto {
    @Getter
    @AllArgsConstructor
    public static class RegisterRequest {
        @Email
        @NotBlank
        private String email;

        @NotBlank
        private String password;

        @NotBlank
        private String nickname;
    }

    @Getter
    @AllArgsConstructor
    public static class RegisterResponse{
        private long memberId;
        private String email;
    }

    @Getter
    @AllArgsConstructor
    @Builder    // 안에 쓸지 밖에 쓸지 좀 더 생각.
    public static class UpdateRequest {
        private String nickname;
        private String password;
        private String about;
        private String img;
    }
}
