package com.seb40_main_031.global.security.utils;

import com.google.gson.Gson;
import com.seb40_main_031.global.error.ErrorResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * ErrorResponder 클래스는 ErrorResponse를 출력 스트림으로 생성하는 역할을 합니다
 */
public class ErrorResponder {
    public static void sendErrorResponse(HttpServletResponse response, HttpStatus status, String sendMessage) throws IOException{
        Gson gson = new Gson();
        ErrorResponse errorResponse = ErrorResponse.of(status);
        errorResponse.changeMessage(sendMessage);
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        response.setStatus(status.value());
        response.getWriter().write(gson.toJson(errorResponse, ErrorResponse.class));
    }
}
