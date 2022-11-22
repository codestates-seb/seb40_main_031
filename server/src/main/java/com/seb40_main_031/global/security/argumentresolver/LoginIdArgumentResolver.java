package com.seb40_main_031.global.security.argumentresolver;

import com.seb40_main_031.global.security.auth.Principal;
import org.springframework.core.MethodParameter;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.ModelAndViewContainer;

public class LoginIdArgumentResolver implements HandlerMethodArgumentResolver {
    /**
     * supportsParameter는 핸들러(컨트롤러 메소드)의 특정 파라미터를 지원하는지
     * 여부를 판단하기 위한 메소드다. 쉽게 말해 어떤 파라미터에 대해 작업을 수행할 것인지를 정의하는 곳
     */
    @Override
    public boolean supportsParameter(MethodParameter parameter) {
        boolean hasLoginAccountIdAnnotation = parameter.hasParameterAnnotation(LoginAccountId.class);
        boolean hasLongType = Long.class.isAssignableFrom(parameter.getParameterType());

        return hasLoginAccountIdAnnotation && hasLongType;
    }

    /**
     * resolveArgument에서는 해당 parameter에 대한 실질적인 로직을 처리하는 곳
     * parameter에 전달할 객체에 대한 조작을 자유롭게 진행한 뒤 해당 객체를 리턴
     */
    @Override
    public Object resolveArgument(MethodParameter parameter, ModelAndViewContainer mavContainer, NativeWebRequest webRequest, WebDataBinderFactory binderFactory) throws Exception {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (principal == "anonymousUser") {
            return -1L;
        }

        Principal castedPrincipal = (Principal) principal;

        return castedPrincipal.getId();
    }
}
