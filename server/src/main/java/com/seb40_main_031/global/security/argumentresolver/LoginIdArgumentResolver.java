package com.seb40_main_031.global.security.argumentresolver;

import com.seb40_main_031.global.security.auth.Principal;
import org.springframework.core.MethodParameter;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.ModelAndViewContainer;

public class LoginIdArgumentResolver implements HandlerMethodArgumentResolver {

    @Override
    public boolean supportsParameter(MethodParameter parameter) {
        boolean hasLoginAccountIdAnnotation = parameter.hasParameterAnnotation(LoginAccountId.class);
        boolean hasLongType = Long.class.isAssignableFrom(parameter.getParameterType());

        return hasLoginAccountIdAnnotation && hasLongType;
    }

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
