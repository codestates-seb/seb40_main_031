//package com.seb40_main_031.global.security.config;
//
//
//import com.seb40_main_031.global.security.filter.JwtVerificationFilter;
//import com.seb40_main_031.global.security.utils.MemberAuthorityUtils;
//import com.seb40_main_031.global.security.JwtTokenizer;
//import com.seb40_main_031.global.security.filter.JwtAuthenticationFilter;
//import com.seb40_main_031.global.security.handler.MemberAccessDeniedHandler;
//import com.seb40_main_031.global.security.handler.MemberAuthenticationEntryPoint;
//import com.seb40_main_031.global.security.handler.MemberAuthenticationFailureHandler;
//import com.seb40_main_031.global.security.handler.MemberAuthenticationSuccessHandler;
//import lombok.RequiredArgsConstructor;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.HttpMethod;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.crypto.factory.PasswordEncoderFactories;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.web.cors.CorsConfiguration;
//import org.springframework.web.cors.CorsConfigurationSource;
//import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
//
//import java.util.List;
//
//import static org.springframework.security.config.Customizer.withDefaults;
//
//@Configuration
//@EnableWebSecurity(debug = true)
//@RequiredArgsConstructor
//public class SecurityConfiguration {
//    private final JwtTokenizer jwtTokenizer;
//    private final MemberAuthorityUtils authorityUtils;
//
//    @Bean
//    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
//        http
//                .headers().frameOptions().sameOrigin()      // todo 추후 변경?
//                .and()
//                .csrf().disable()   // 로컬에서 사용.
//                .cors(withDefaults())   // CorsConfigurationSource의 설정을 따라감.
//                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//                // 세션을 사용하지 않고, 토큰기반 사용.
//                .and()
//                .formLogin().disable()  // 폼로그인 X
//                .httpBasic().disable()  // 토큰 사용
//                .exceptionHandling()
//                .authenticationEntryPoint(new MemberAuthenticationEntryPoint())     // 인증에 실패한 경우
//                .accessDeniedHandler(new MemberAccessDeniedHandler())               // 권한이 없는 API에 접근한 경우
//                .and()
//                .apply(new CustomFilterConfigurer())
//                .and()
//                .authorizeHttpRequests(authorize -> authorize
//                        .antMatchers(HttpMethod.POST, "/members/signup").permitAll()    // 회원가입
//                        .antMatchers(HttpMethod.PATCH, "/members/**").hasRole("USER")   // 회원정보 수정
//                        .antMatchers(HttpMethod.GET, "/members/**").permitAll()         // 회원정보 조회
//                        .antMatchers(HttpMethod.DELETE, "/members/**").hasRole("USER")  // 회원 탈퇴
//                        .anyRequest().permitAll());
//        return http.build();
//    }
//
//
//    @Bean
//    public PasswordEncoder passwordEncoder(){
//        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
//    }
//
//    @Bean
//    CorsConfigurationSource corsConfigurationSource(){
//        CorsConfiguration configuration = new CorsConfiguration();
//        configuration.setAllowedOrigins(List.of("*"));
//        configuration.setAllowedMethods(List.of("GET","POST","PATCH","DELETE"));
//        configuration.setExposedHeaders(List.of("*"));  // fixme : cors 해결 임시 방책
//        configuration.setAllowedHeaders(List.of("*"));
//
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        source.registerCorsConfiguration("/**", configuration);
//        return source;
//    }
//
//    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity>{
//        @Override
//        public void configure(HttpSecurity builder) throws Exception{
//            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);
//
//            JwtAuthenticationFilter jwtAuthenticationFilter =
//                    new JwtAuthenticationFilter(authenticationManager, jwtTokenizer);   // DI
//
//
//            // filter를 통한 로그인.
//            jwtAuthenticationFilter.setFilterProcessesUrl("/members/login");
//
//            // success handler, failure handler
//            jwtAuthenticationFilter.setAuthenticationSuccessHandler(new MemberAuthenticationSuccessHandler());
//            jwtAuthenticationFilter.setAuthenticationFailureHandler(new MemberAuthenticationFailureHandler());
//
//
//            JwtVerificationFilter jwtVerificationFilter =
//                    new JwtVerificationFilter(jwtTokenizer, authorityUtils); // DI
//
//            builder.addFilter(jwtAuthenticationFilter)
//                    .addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class);
//
//
//        }
//    }
//}
