package com.seb40_main_031.global.security;


import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.io.Encoders;
import io.jsonwebtoken.security.Keys;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Calendar;
import java.util.Date;
import java.util.Map;

/**
 * JwtTokenizer 클래스는 로그인 인증에 성공한 클라이언트에게 JWT를 생성 및 발급하고
 * 클라이언트의 요청이 들어올 때 마다 전달된 JWT를 검증하는 역할을 합니다
 */

//@RequiredArgsConstructor
@Component
public class JwtTokenizer {

    @Getter
    @Value("${jwt.secretKey}")
    private String secretKey;

    @Getter
    @Value("${jwt.access-token-expiration-minutes}")
    private int accessTokenExpirationMinutes;

    @Getter
    @Value("${jwt.refresh-token-expiration-minutes}")
    private int refreshTokenExpirationMinutes;


    public String encodeBase64SecretKey(String secretKey){
        return Encoders.BASE64.encode(secretKey.getBytes(StandardCharsets.UTF_8));
    }

    public String generateAccessToken(Map<String, Object> claims,
                                      String subject,
                                      Date expiration,
                                      String base64EncodedSecretKey){
        // Base64 형석 Secret Key 문자열을 이용해 Key(java.security.Key) 객체를 얻음
        Key key = getKeyFromBase64EncodedKey(base64EncodedSecretKey);

        return Jwts.builder()
                .setClaims(claims) // JWT에 포함 시키는 부분, 주로 인증된 사용자와 관련된 정보
                .setSubject(subject) // JWT에 대한 제목 추가 // 기존 이메일에서 memberId String 값으로 넣음
                .setIssuedAt(Calendar.getInstance().getTime()) // JWT 발행 일자 설정, 파라미터 타입은 java.util.Date
                .setExpiration(expiration) // JWT 만료일시 지정, 파라미터는 java.util.Date
                .signWith(key) // 서명을 위한 Key 객체 설정
                .compact(); // JWT를 생성하고 직렬화 함
    }

    /**
     * Access Token을 새로 발급해 주는 역할이므로 별도의 Custom Claims는 추가할 필요 없음
     */
    public String generateRefreshToken(String subject, Date expiration, String base64EncodedSecretKey){
        Key key = getKeyFromBase64EncodedKey(base64EncodedSecretKey);

        return Jwts.builder()
                .setSubject(subject)
                .setIssuedAt(Calendar.getInstance().getTime())
                .setExpiration(expiration)
                .signWith(key)
                .compact();
    }

    // jws = jwt(signature)
    public Jws<Claims> getClaims(String jws, String base64EncodedSecretKey){
        Key key = getKeyFromBase64EncodedKey(base64EncodedSecretKey);

        Jws<Claims> claims = Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(jws);

        return claims;
    }

    /**
     * JWT 검증 기능으로 Signature를 검증하는 용도로 리턴 값은 없음
     * 인증된 사용자가 애플리케이션 리소스에 접근할 때 마다 request의 header에 포함된
     * JWT를 검증할 때 사용 됨
     * 파라미터 jws는 Signature가 포함된 JWT라는 의미
     */
    public void verifySignature(String jws, String base64EncodedSecretKey){
        Key key = getKeyFromBase64EncodedKey(base64EncodedSecretKey);

        /**
         * jjwt에서 JWT를 생성할 때 서명에 사용된 Secret Key를 이용해 내부적으로 Signature를 검증 후
         * 검증에 성공하면 JWT를 파싱해서 Claims를 얻을 수 있음
         */
        Jwts.parserBuilder()
                .setSigningKey(key) // 서명에 사용된 Secret Key를 설정
                .build()
                .parseClaimsJws(jws); // JWT를 파싱해서 Claims를 얻음
    }

    /**
     * JWT의 만료 일시를 지정하기 위한 메서드로 JWT 생성 시 사용
     */
    public Date getTokenExpiration(int expirationMinutes){
        Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.MINUTE, expirationMinutes);
        Date expiration = calendar.getTime();

        return expiration;
    }

    /**
     * JWT 서명에 사용할 Secret Key를 생성해주는 부분
     */
    private Key getKeyFromBase64EncodedKey(String base64EncodedSecretKey){
        // Base64 형식으로 인코딩 된 Secret Key를 디코딩 한 후, byte array를 반환
        byte[] keyBytes = Decoders.BASE64.decode(base64EncodedSecretKey);
        // keey byte array를 기반으로 적절한 HMAC 알고리즘을 적용한 Key 객체 생성
        Key key = Keys.hmacShaKeyFor(keyBytes);

        return key;
    }






//    public String createToken(String email){
//        Claims claims = Jwts.claims().setSubject(email);
//        Date now = new Date();
//
//        return Jwts.builder()
//                .setClaims(claims)
//                .setIssuedAt(now)
//                .setExpiration(new Date(now.getTime() + tokenValidTime))
//                .signWith(SignatureAlgorithm.ES256, secretKey)
//                .compact();
//    }
//
//    public Authentication getAuthentication(String token){
//        UserDetails userDetails = memberDetailsService.loadUserByUsername(getMemberEmail(token));
//        return new UsernamePasswordAuthenticationToken(userDetails, "", userDetails.getAuthorities());
//    }
//
//    public String getMemberEmail(String token){
//        try{
//            return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().getSubject();
//        }catch (ExpiredJwtException e){
//            return e.getClaims().getSubject();
//        }
//    }
}
