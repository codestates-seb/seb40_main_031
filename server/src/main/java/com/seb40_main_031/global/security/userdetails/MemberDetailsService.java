package com.seb40_main_031.global.security.userdetails;

import com.seb40_main_031.domain.member.entity.Member;
import com.seb40_main_031.domain.member.repository.MemberRepository;
import com.seb40_main_031.global.error.exception.BusinessLogicException;
import com.seb40_main_031.global.error.exception.ExceptionCode;
import com.seb40_main_031.global.security.utils.CustomAuthorityUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.Optional;

/**
 * Security Filter가 수신한 로그인 인증 정보를 AuthenticationManager에게 전달해 인증 처리를 위임
 * AuthenticationManager가 알아서 Custom UserDetailsService(MemberDetailsService)에게
 * 사용자의 UserDetails 조회를 위임
 *
 * Custom UserDetailsService(MemberDetailsService)가 사용자의 크리덴셜을 DB에서 조회한 후,
 * AuthenticationManager에게 사용자의 UserDetails를 전달
 */

// Custom UserDetailsService를 구현학기 위해 UserDetailsService 인터페이스 구현
@Component
@RequiredArgsConstructor
public class MemberDetailsService implements UserDetailsService {
    /**
     * MemberDetailsService는 데이터베이스에서 User를 조회하고, 조회한 User의 권한(Role) 정보를
     * 생성하기 위해 MemberRepository와 HelloAuthorityUtils 클래스를 DI 받음
     */
    private final MemberRepository memberRepository;
    private final CustomAuthorityUtils authorityUtils;

    // UserDetailService 인터페이스를 구현하는 클래스는 loadUserByUsername 구현해야함
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException{
        Optional<Member> optionalMember = memberRepository.findByEmail(username);
        Member findMember = optionalMember.orElseThrow(()-> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

        /**
         * 데이터베이스에서 조회한 인증 정보와 생성한 권한 정보를 Spring Security에서는 아직 알지 못하기 때문에 Spring Security에 이 정보들을 제공해 주어야하며,
         * UserDetails 인터페이스의 구현체인 MemberDetails 클래스의 객체를 통해 제공하고 있습니다.
         *
         * 데이터베이스에서 조회한 User 클래스의 객체를 리턴하면 Spring Security가 이 정보를 이용해 인증 절차를 수행합니다.
         *
         * ⭐ 즉, 데이터베이스에서 User의 인증 정보만 Spring Security에게 넘겨주고, 인증 처리는 Spring Security가 대신해 줍니다.
         */
        return new MemberDetails(findMember);
    }

    /**
     * UserDetails는 UserDetailsService에 의해 로드(load)되어 인증을 위해 사용되는 핵심 User 정보를 표현하는 인터페이스입니다.
     * UserDetails 인터페이스의 구현체는 Spring Security에서 보안 정보 제공을 목적으로 직접 사용되지는 않고, Authentication 객체로 캡슐화 되어 제공됩니다.
     */

    private final class MemberDetails extends Member implements UserDetails {

        MemberDetails(Member member){
            setMemberId(member.getMemberId());
            setEmail(member.getEmail());
            setPassword(member.getPassword());
            setNickname(member.getNickname());
            setRoles(member.getRoles());
//            me = member.getMemberId();
//            String nickname = member.getNickname();
//            String email = member.getEmail();
//            String password = member.getPassword();
//            List<String> roles = member.getRoles();
        }

        @Override
        public Collection<? extends GrantedAuthority> getAuthorities() {
            return authorityUtils.createAuthorities(this.getRoles());
        }

        @Override
        public String getUsername() {
            return getEmail();
        }

        @Override
        public boolean isAccountNonExpired() {
            return true;
        }

        @Override
        public boolean isAccountNonLocked() {
            return true;
        }

        @Override
        public boolean isCredentialsNonExpired() {
            return true;
        }

        @Override
        public boolean isEnabled() {
            return true;
        }
    }
}
