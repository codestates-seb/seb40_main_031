package com.seb40_main_031.global.security.config;


import com.seb40_main_031.global.security.JwtTokenizer;
import com.seb40_main_031.global.security.filter.JwtAuthenticationFilter;
import com.seb40_main_031.global.security.filter.JwtVerificationFilter;
import com.seb40_main_031.global.security.handler.MemberAccessDeniedHandler;
import com.seb40_main_031.global.security.handler.MemberAuthenticationEntryPoint;
import com.seb40_main_031.global.security.handler.MemberAuthenticationFailureHandler;
import com.seb40_main_031.global.security.handler.MemberAuthenticationSuccessHandler;
import com.seb40_main_031.global.security.utils.CustomAuthorityUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;
import java.util.List;

import static org.springframework.security.config.Customizer.withDefaults;

/**
 * - Custom Filter 추가를 위한 SecurityConfiguration 설정 추가
 * Custom Filter인 JwtAuthenticationFilter 의 구현이 끝났다면
 * JwtAuthenticationFilter 를 Spring Security Filter Chain에 추가해서 로그인 인증을 처리하도록 해야 합니다.
 */

/**
 * 검증필터인 JwtVerificationFilter를 사용하기 위해서는 아래와 같은 두 가지 설정을
 * SecurityConfigruation에 추가해야 합니다.
 *
 * 1. 세션 정책 설정 추가
 * 2. JwtVerificationFilter 추가
 *
 * stateless한 애플리케이션을 유지하기 위해 세션 유지 시간을 아주 짧게 가져가기
 * 위한(거의 무상태) 설정을 SecurityConfigruation에 추가할 필요가 있습니다
 *
 * SessionCreationPolicy 설정 추가
 *
 * authenticationEntryPoint와 accessDeniedHandler 추가
 */

/**
 * SessionCreationPolicy 의 설정 값으로는 아래와 같이 총 네 개의 값을 사용할 수 있습니다.
 * SessionCreationPolicy.*ALWAYS*
 * 항상 세션을 생성합니다.
 *
 * SessionCreationPolicy.NEVER
 * 세션을 생성하지 않지만 만약에 이미 생성된 세션이 있다면 사용합니다.
 *
 * SessionCreationPolicy.*IF_REQUIRED*
 * 필요한 경우에만 세션을 생성합니다.
 *
 * SessionCreationPolicy.*STATELESS*
 * 세션을 생성하지 않으며, SecurityContext 정보를 얻기 위해 결코 세션을 사용하지 않습니다
 */

@Configuration
//@EnableWebSecurity(debug = true)
@RequiredArgsConstructor
public class SecurityConfiguration {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
        http
                .headers().frameOptions().sameOrigin()      // todo 추후 변경? H2 웹 콘솔 사용을 위해 설정
                .and()
                .csrf().disable()   // 로컬에서 사용.
                .cors(withDefaults())   // CorsConfigurationSource의 설정을 따라감.
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                // 세션을 생성하지 않도록 설정, 토큰기반 사용.
                .and()
                .formLogin().disable()  // 폼로그인 X, CSR방식 사용 위해 JSON포맷으로 Username과 Password를 전송하는 방식 사용 할것임
                .httpBasic().disable()  // 토큰 사용
                .exceptionHandling()
                .authenticationEntryPoint(new MemberAuthenticationEntryPoint())     // 인증에 실패한 경우
                .accessDeniedHandler(new MemberAccessDeniedHandler())               // 권한이 없는 API에 접근한 경우
                .and()
                .apply(new CustomFilterConfigurer()) //  apply() 메서드에 Custom Configurer를 추가해 커스터마이징(customizations)된 Configuration을 추가할 수 있습니다.
                .and()
                .authorizeHttpRequests(authorize -> authorize
                        .antMatchers(HttpMethod.OPTIONS, "/**/*").permitAll()
                        .antMatchers(HttpMethod.POST, "/members/signup").permitAll()    // 회원가입
                        .antMatchers(HttpMethod.POST, "/members/login").permitAll()
                        .antMatchers(HttpMethod.PATCH, "/members/**").hasRole("USER")   // 회원정보 수정
//                        .antMatchers(HttpMethod.GET, "/members/**").hasAnyRole("USER", "ADMIN") // 회원정보 조회
                        .antMatchers(HttpMethod.DELETE, "/members/**").hasRole("USER")  // 회원 탈퇴
//                        .antMatchers("/chat/**").hasRole("USER")  // chat으로 시작하는 리소스 접근 권한
                        .anyRequest().permitAll()
                );
        return http.build();
    }


    @Bean
    public PasswordEncoder passwordEncoder(){
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource(){
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowCredentials(true);
        configuration.addAllowedOriginPattern("*");
        configuration.addAllowedHeader("*");
        configuration.addAllowedMethod("*");
        configuration.addExposedHeader("Authorization");
        configuration.addExposedHeader("Refresh");

//        configuration.addExposedHeader("Access-Control-Allow-Origin");
//        configuration.setAllowedOrigins(Arrays.asList("*"));
//        configuration.setAllowedMethods(Arrays.asList("GET","POST", "PATCH", "DELETE"));

        configuration.addExposedHeader("Access-Control-Allow-Origin");
        configuration.setAllowedOrigins(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("GET","POST", "PATCH", "DELETE"));


//        configuration.addAllowedOriginPattern("*");
//        configuration.addAllowedHeader("*");
//        configuration.addAllowedMethod("*");
//        configuration.addExposedHeader("Authorization");

//        configuration.setAllowedOrigins(List.of("*")); // 모든 출처(Origin)에 대해 스크립트 기반의 HTTP 통신을 허용하도록 설정합니다. 이 설정은 운영 서버 환경에서 요구사항에 맞게 변경이 가능
//        configuration.setAllowedMethods(List.of("GET","POST","PATCH","DELETE"));
//        configuration.setExposedHeaders(List.of("*"));  // fixme : cors 해결 임시 방책
//        configuration.setAllowedHeaders(List.of("*"));

        // CorsConfigurationSource 인터페이스의 구현 클래스인 UrlBasedCorsConfigurationSource 클래스의 객체 생성
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        // 모든 URL에 앞에서 구성한 CORS 정책(CorsConfiguration)을 적용
        source.registerCorsConfiguration("/**", configuration);

//        source.registerCorsConfiguration("/members/**", configuration);

        source.registerCorsConfiguration("/members/**", configuration);

        return source;
    }

    /**
     * Spring Security에서는 개발자가 직접 Custom Configurer를 구성해
     * Spring Security의 Configuration을 커스터마이징(customizations) 할 수 있습니다.
     * CustomFilterConfigurer는 우리가 구현한 JwtAuthenticationFilter를 등록하는 역할을 합니다.
     * AbstractHttpConfigurer를 상속해서 Custom Configurer를 구현할 수 있습니다
     */
    /**
     * 인증 성공 또는 실패 시 사용 될 구현 클래스 등록
     * MemberAuthenticationSuccessHandler, MemberAuthenticationFailureHandler
     */
    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {
        // configure() 메서드를 오버라이드해서 Configuration을 커스터마이징할 수 있습니다.
        @Override
        public void configure(HttpSecurity builder) throws Exception {
            /**
             * getSharedObject(AuthenticationManager.class)를 통해 AuthenticationManager의 객체를 얻을 수 있습니다.
             * getSharedObject() 를 통해서 Spring Security의 설정을 구성하는 SecurityConfigurer 간에 공유되는 객체를 얻을 수 있습니다.
             */
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);

            // JwtAuthenticationFilter를 생성하면서 JwtAuthenticationFilter에서 사용되는 AuthenticationManager와 JwtTokenizer를 DI 해줍니다.
            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer);
            // setFilterProcessesUrl() 메서드를 통해 디폴트 request URL인 “/login”을 “/members/login”으로 변경합니다. // filter를 통한 로그인.
            jwtAuthenticationFilter.setFilterProcessesUrl("/members/login");
            // 인증 성공 or 실패 시 사용될 구현 클래스 등록 // success handler, failure handler
            jwtAuthenticationFilter.setAuthenticationSuccessHandler(new MemberAuthenticationSuccessHandler());
            jwtAuthenticationFilter.setAuthenticationFailureHandler(new MemberAuthenticationFailureHandler());

            // JwtVerificationFilter의 인스턴스를 생성하면서 JwtVerificationFilter에서 사용되는 객체들을 생성자로 DI 해줍니다
            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, authorityUtils);

            // addFilter() 메서드를 통해 JwtAuthenticationFilter를 Spring Security Filter Chain에 추가합니다.
            builder.addFilter(jwtAuthenticationFilter)
                    .addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class);
            /**
             * JwtVerificationFilter가 JwtAuthenticationFilter가 수행된 바로 다음에 동작하도록 JwtAuthenticationFilter 뒤에 추가합니다.
             * 인증 과정이 수행된 이후에 JwtVerificationFilter가 수행되도록 하는 것이 상식적으로도 자연스러울 것입니다
             */
        }
    }
}
