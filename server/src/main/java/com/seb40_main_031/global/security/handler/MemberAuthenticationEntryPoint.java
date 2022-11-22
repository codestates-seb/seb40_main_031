package com.seb40_main_031.global.security.handler;

import com.seb40_main_031.global.security.utils.ErrorResponder;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * MemberAuthenticationEntryPoint 클래스는 인증 과정에서 AuthenticationException 이 발생할 경우 호출되며,
 * 처리하고자 하는 로직을 commence() 메서드에 구현하면 됩니다
 * 인증 과정에서 AuthenticationException 발생하면 ErrorResponse를 생성해서 클라이언트에게 전송
 *
 * SecurityConfiguration에 AuthenticationEntryPoint 및 AccessDeniedHandler 추가
 */
@Slf4j
@Component
public class MemberAuthenticationEntryPoint implements AuthenticationEntryPoint {
    @Override
    public void commence(HttpServletRequest request,
                         HttpServletResponse response,
                         AuthenticationException authException) throws IOException, ServletException {
        Exception exception = (Exception) request.getAttribute("exception");
        ErrorResponder.sendErrorResponse(response, HttpStatus.UNAUTHORIZED, "unauthorized, Retry authentication");

        logExceptionMessage(authException, exception);
    }

    private void logExceptionMessage(AuthenticationException authException, Exception exception){
        String message = exception != null ? exception.getMessage() : authException.getMessage();
        log.warn("Unauthorized error happened: {}", message);
    }
}
