package com.seb40_main_031.global.security.filter;

import com.seb40_main_031.global.security.JwtTokenizer;
import com.seb40_main_031.global.security.auth.Principal;
import com.seb40_main_031.global.security.utils.CustomAuthorityUtils;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.security.SignatureException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.util.Map;

/**
 * 검증에 사용 될 클래스로
 * JWT 검증을 위해 가장 먼저 해야될 작업은 JWT를 검증하는 전용 Security Filter를 구현
 *
 * 클라이언트 측에서 전송된 request header에 포함된 JWT에 대해 검증 작업을 수행하는
 * JwtVerificationFilter의 코드
 */

@RequiredArgsConstructor
public class JwtVerificationFilter extends OncePerRequestFilter { // Spring Security에서는 OncePerRequestFilter를 확장해서 request 당 한번만 실행되는 Security Filter를 구현할 수 있습니다.
    // JwtTokenizer는 JWT를 검증하고 Claims(토큰에 포함된 정보)를 얻는데 사용됩니다
    private final JwtTokenizer jwtTokenizer;
    // CustomAuthorityUtils는 JWT 검증에 성공하면 Authentication 객체에 채울 사용자의 권한을 생성하는데 사용됩니다
    private final CustomAuthorityUtils authorityUtils;

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException{
        /**
         * JWT에 대한 서명 검증 실패, JWT가 만료될 경우 등의 예외 처리를 함
         * 예외가 발생하면 SecurityContext에 클라이언트의 인증 정보가 저장되지 않음
         * 저장도지 않고 다음 Security Filter 로직을 수행하면 AuthenticationException이 발생하고
         * 이 AuthenticationException은 AuthenticationEntryPoint에서 처리하게 됨
         */
        try{
            Map<String, Object> claims = verifyJws(request);
            // Authentication 객체를 SecurityContext에 저장하기 위한 private 메서드
            setAuthenticationToContext(claims);
        } catch (SignatureException se){
            request.setAttribute("exception", se);
        } catch (ExpiredJwtException ee) {
            request.setAttribute("exception", ee);
        } catch (Exception e){
            request.setAttribute("exception", e);
        }

        /**
         * WT는 클라이언트 정보 등의 상태를 저장하지 않는 Stateless한 방식인데
         * SecurityContext에 Authentication을 저장하게되면 세션의 상태는 어떻게 되는지???
         *
         * SecurityContext에 Authentication을 저장하게 되면 Spring Security의
         * 세션 정책(Session Policy)에 따라서 세션을 생성할 수도 있고, 그렇지 않을 수도 있습니다.
         * JWT 환경에서는 세션 정책(Session Policy) 설정을 통해 세션 자체를 생성하지 않도록 설정
         *
         * 문제없이 JWT의 서명 검증에 성공하고,
         * Security Context에 Authentication을 저장한 뒤에는
         * 다음(Next) Security Filter를 호출합니다
         */
        filterChain.doFilter(request, response);
        /**
         * doFilter를 실행하면 WebConfig 클래스에서 오버라이드 해놓은 addArgumentResolvers 메서드 등록해 놓은
         * LoginIdArgumentResolver 클래스가 실행됨, 클래스 안에 오버라이드 해놓은 두개의 메서드를 커스터마이징 함
         * supportsParameter -> LoginAccountId에 파라미터가 들어오고 Long 타입이면 True로 다음 메서드 실행
         * resolveArgument -> SecurityContextHolder에 getPrincipal로 사용자를 가져와서
         * 해당 사용자의 memberId 값을 리턴해줌
         */
    }

    /**
     * OncePerRequestFilter의 shouldNotFilter()를 오버라이드 한 것으로,
     * 특정 조건에 부합하면(true이면) 해당 Filter의 동작을 수행하지 않고 다음 Filter로 건너뛰도록 해줍니다
     * @@@@ shouldNotFilter 메서드에서
     * 1. Authorization header의 값을 얻은 후에
     * 2. Authorization header의 값이 null이거나 Authorization header의 값이 “Bearer”로 시작하지 않는다면 해당 Filter의 동작을 수행하지 않도록 정의
     * 즉, 이 말의 의미는 JWT가 Authorization header에 포함되지 않았다면 JWT 자격증명이 필요하지 않은 리소스에 대한 요청이라고 판단하고 다음(Next) Filter로 처리를 넘기는 것입니다
     * 만일 JWT 자격 증명이 필요한 리소스 요청인데 실수로 JWT를 포함하지 않았다 하더라도 이 경우에는 Authentication이 정상적으로 SecurityContext에 저장되지 않은 상태이기 때문에 다른 Security Filter를 거쳐 결국 Exception을 던지게 될 것입니다
     */
    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
        String authorization = request.getHeader("Authorization");

        return authorization == null || !authorization.startsWith("Bearer");
    }

    // JWT를 검증하는데 사용되는 private 메서드
    private Map<String, Object> verifyJws(HttpServletRequest request){
        /**
         * request의 header에서 JWT 얻어오기, 얻어온 부분에서 Bearer 제거
         * 변수명 jws는 서명된 JWT를 JWS(JSON Web Token Signed)라고 부르기 때문임
         */
        String jws = request.getHeader("Authorization").replace("Bearer ", "");
        // JWT 서명(Signature)을 검증하기 위한 Secret Key를 얻음
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());
        /**
         * JWT에서 Claims를 파싱함
         * JWT에서 Claims를 파싱할 수 있다는 의미는 내부적으로 서명 검증에 성공했다는 의미임
         * 즉, verify() 같은 검증 메서드가 따로 존재하는 것이 아니라
         * Claims가 정상적으로 파싱이 되면 서명 검증 역시 자연스럽게 성공했다는 사실임
         */
        Map<String, Object> claims = jwtTokenizer.getClaims(jws, base64EncodedSecretKey).getBody();

        return claims;
    }

    // Authentication 객체를 SecurityContext에 저장하기 위한 private 메서드
    private void setAuthenticationToContext(Map<String,Object> claims){
        // JWT에서 파싱한 Claims에서 Username을 얻음
        String username = (String) claims.get("email"); // email 값을 가져오게 됨
        // JWT의 Claims에서 얻은 권한 정보를 기반으로 List<GrantedAuthority>를 생성
        List<GrantedAuthority> authorities = authorityUtils.createAuthorities((List)claims.get("roles"));

        Principal principal = new Principal(Long.valueOf((String) claims.get("sub")), (String) claims.get("email"));

        // username과 List<GrantedAuthority> 를 포함한 Authentication 객체를 생성
        Authentication authentication = new UsernamePasswordAuthenticationToken(principal, null, authorities);
        // SecurityContext에 Authentication 객체를 저장
        SecurityContextHolder.getContext().setAuthentication(authentication);
    }
}
