package com.seb40_main_031.global.security.handler;

import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

// 로그인 인증 성공 시 추가 작업을 할 수 있는 MemberAuthenticationSuccessHandler 코드

/**
 * ApplicationContext에 등록된 MemberAuthenticationSuccessHandler Bean 객체는
 * SecurityConfiguration에서 JwtAuthenticationFilter 추가 시,
 * AuthenticationSuccessHandler로 등록할 예정
 */
@Component // ApplicationContext에 등록
@Slf4j
public class MemberAuthenticationSuccessHandler implements AuthenticationSuccessHandler {
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication) throws IOException {
        /**
         * 단순히 로그만 출력하고 있지만 💡 Authentication 객체에 사용자 정보를 얻은 후,
         * HttpServletResponse로 출력 스트림을 생성하여 response를 전송할 수 있음
         */
        // 인증 성공 후, 로그를 기록하거나 사용자 정보를 response로 전송하는 등의 추가 작업을 할 수 있다
        log.info("# authenticated successfully!");
    }
}
