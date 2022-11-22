package com.seb40_main_031.global.security.handler;

import com.seb40_main_031.global.security.utils.ErrorResponder;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * AccessDeniedHandler는 인증에는 성공했지만 해당 리소스에 대한 권한이 없을 경우 호출되는 핸들러
 * MemberAccessDeniedHandler클래스는 요청한 리소스에 대해 적절한 권한이 없을 경우 호출되는 핸들러로써,
 * 처리하고자 하는 로직을 handle() 메서드에 구현하면 됩니다.
 *
 * SecurityConfiguration에 AuthenticationEntryPoint 및 AccessDeniedHandler 추가
 */
@Slf4j
@Component
public class MemberAccessDeniedHandler implements AccessDeniedHandler {
    @Override
    public void handle(HttpServletRequest request,
                       HttpServletResponse response,
                       AccessDeniedException accessDeniedException) throws IOException, ServletException {
        ErrorResponder.sendErrorResponse(response, HttpStatus.FORBIDDEN, "access denied , no permission");
        log.warn("Forbidden error happened: {}", accessDeniedException.getMessage());
    }
}