package com.seb40_main_031.security.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;

@Getter
public class LoginDto {
    @NotBlank
    private String username;

    @NotBlank
    private String password;
}
