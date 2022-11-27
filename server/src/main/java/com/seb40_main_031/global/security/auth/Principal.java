package com.seb40_main_031.global.security.auth;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Principal {
    private Long id;
    private String email;
}
