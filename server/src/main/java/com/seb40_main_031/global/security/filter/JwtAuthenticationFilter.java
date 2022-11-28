package com.seb40_main_031.global.security.filter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.seb40_main_031.domain.chat.dto.LoginInfo;
import com.seb40_main_031.domain.member.entity.Member;
import com.seb40_main_031.global.security.JwtTokenizer;
import com.seb40_main_031.global.security.dto.LoginDto;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * 로그인 인증 요청을 처리하는 Custom Security Filter 구현
 * 이제 클라이언트의 로그인 인증 정보를 직접적으로 수신하여 인증 처리의 엔트리포인트(Entrypoint) 역할을 하는 Custom Filter를 구현해 봅시다.
 */

/**
 * UsernamePasswordAuthenticationFilter는 폼로그인 방식에서 사용하는 디폴트 Security Filter로써,
 * 폼로그인이 아니더라도 Username/Password 기반의 인증을 처리하기 위해
 * UsernamePasswordAuthenticationFilter를 확장해서 구현할 수 있습니다.
 */
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    // AuthenticationManager는 로그인 인증 정보(Username/Password)를 전달 받아 UserDetailsService와 인터랙션 한뒤 인증 여부를 판단합니다.
    private final AuthenticationManager authenticationManager;
    // JwtTokenizer는 클라이언트가 인증에 성공할 경우, JWT를 생성 및 발급하는 역할을 합니다.
    private final JwtTokenizer jwtTokenizer;
//    private final LoginInfo loginInfo;

    // attemptAuthentication 메서드 내부에서 인증을 시도하는 로직을 구현하면 됩니다.
    @SneakyThrows
    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response){

        // 클라이언트에서 전송한 Username과 Password를 DTO 클래스로 역직렬화(Deserialization)하기 위해 ObjectMapper 인스턴스를 생성합니다.
        ObjectMapper objectMapper = new ObjectMapper();

        // objectMapper.readValue(request.getInputStream(), LoginDto.class)를 통해 ServletInputStream 을 LoginDto 클래스의 객체로 역직렬화(Deserialization)합니다.
        LoginDto loginDto = objectMapper.readValue(request.getInputStream(), LoginDto.class);

        // Username과 Password 정보를 포함한 UsernamePasswordAuthenticationToken을 생성합니다.
        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(loginDto.getEmail(), loginDto.getPassword());

        // UsernamePasswordAuthenticationToken을 AuthenticationManager에게 전달하면서 인증 처리를 위임합니다.
        return authenticationManager.authenticate(authenticationToken);
    }

    // 클라이언트의 인증 정보를 이용해 인증에 성공할 경우 호출됩니다
    @Override
    @SneakyThrows
    protected void successfulAuthentication(HttpServletRequest request,
                                            HttpServletResponse response,
                                            FilterChain chain,
                                            Authentication authResult){
        /**
         * authResult.getPrincipal()로 Member 엔티티 클래스의 객체를 얻음
         *
         * AuthenticationManager 내부에서 인증에 성공하면 인증된 Authentication 객체가 생성되면서
         * principal 필드에 Member 객체가 할당 됩니다.
         */
        Member member = (Member) authResult.getPrincipal();

        // delegateAccessToken(member) 메서드를 이용해 Access Token을 생성합니다.
        String accessToken = delegateAccessToken(member);
        // delegateRefreshToken(member) 메서드를 이용해 Refresh Token을 생성합니다.
        String refreshToken = delegateRefreshToken(member);

//        LoginInfo.setEmail(member.getEmail());
//        LoginInfo.setNickname(member.getNickname());
//        LoginInfo.setToken(accessToken);


//        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Authorization", "Bearer " + accessToken);
        response.setHeader("Refresh", refreshToken);

        // 인증 성공시 등록해 놓은 AuthenticationSuccessHandler와 AuthenticationFailureHandler를 사용할 수 있도록 호출해서 사용하면 됨
        this.getSuccessHandler().onAuthenticationSuccess(request, response, authResult);
        /**
         * AuthenticationFailureHandler는 별도의 코드를 추가하지 않아도
         * 로그인 인증에 실패하면 우리가 구현한 MemberAuthenticationFailureHandler의
         * onAuthenticationFailure() 메서드가 알아서 호출됩니다.
         */
        /**
         * 현재 코드 상에서는 로그인 인증에 성공한 후,
         * JwtAuthenticationFilter의 successfulAuthentication() 메서드에서
         * JWT를 생성하고 있지만 AuthenticationSuccessHandler에서
         * JWT를 생성하는 것 역시 나쁘지 않은 선택입니다
         */
    }

    // accessToken을 jwtTokenizer에서 만들게 되는데, 그 토큰을 발급받기 위한 재료를 만드는 곳.
    // Access Token 생성하는 로직
    private String delegateAccessToken(Member member){
        Map<String, Object> claims = new HashMap<>();
        // @@ claims 생성 시 멤버아이디 추가
        claims.put("memberId", member.getMemberId());
        // @@ 기존 username을 email로 바꿈
        claims.put("email", member.getEmail());
        claims.put("roles", member.getRoles());

        // memberId를 가져오는 과정에서 Long타입이 Int로 가져오면서 문제가 생기는 것 같음
//        String subject = member.getEmail();
        String subject = member.getMemberId().toString();
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getAccessTokenExpirationMinutes());

        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        String accessToken = jwtTokenizer.generateAccessToken(claims, subject, expiration, base64EncodedSecretKey);

        return accessToken;
    }

    // Refresh Token 생성하는 로직
    private String delegateRefreshToken(Member member){
//        String subject = member.getEmail();
        String subject = member.getMemberId().toString();
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getRefreshTokenExpirationMinutes());
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        String refreshToken = jwtTokenizer.generateRefreshToken(subject,expiration,base64EncodedSecretKey);

        return refreshToken;
    }
}
