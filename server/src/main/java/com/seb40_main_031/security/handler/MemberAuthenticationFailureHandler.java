package com.seb40_main_031.security.handler;

import com.seb40_main_031.security.utils.AuthErrorResponder;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component // ??
@Slf4j
public class MemberAuthenticationFailureHandler implements AuthenticationFailureHandler {
    @Override
    public void onAuthenticationFailure(HttpServletRequest request,
                                        HttpServletResponse response,
                                        AuthenticationException exception) throws IOException{
        log.error("# Authentication failed: {}", exception.getMessage());

//        response.sendError(HttpServletResponse.SC_FORBIDDEN);

       AuthErrorResponder.sendErrorResponse(response, HttpStatus.UNAUTHORIZED, "Invalid ID or Password, please try again");
    }
//
//    private void sendErrorResponse(HttpServletResponse response) throws IOException{
//        Gson gson = new Gson();
//        ErrorResponse errorResponse = ErrorResponse.of(HttpStatus.UNAUTHORIZED);
//        errorResponse.changeMessage("ID 또는 Password를 잘 못 입력하셨습니다.");
//
//        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
//        response.setStatus(HttpStatus.UNAUTHORIZED.value());
//        response.getWriter().write(gson.toJson(errorResponse, ErrorResponse.class));
//
//    }
}
