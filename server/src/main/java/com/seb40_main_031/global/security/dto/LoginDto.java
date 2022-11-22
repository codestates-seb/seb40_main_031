package com.seb40_main_031.global.security.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;

/**
 * 로그인 인증 정보 역직렬화(Deserialization)를 위한 LoginDTO 클래스 생성
 *
 * LoginDTO 클래스는 클라이언트가 전송한 Username/Password 정보를 Security Filter에서 사용할 수 있도록
 * 역직렬화(Deserialization)하기 위한 단순한 DTO 클래스입니다.
 */
@Getter
public class LoginDto {
    @NotBlank
    private String email;

    @NotBlank
    private String password;
}
