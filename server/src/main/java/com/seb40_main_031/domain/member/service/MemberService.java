package com.seb40_main_031.domain.member.service;

import com.seb40_main_031.domain.member.entity.Member;
import com.seb40_main_031.domain.member.repository.MemberRepository;
import com.seb40_main_031.global.error.exception.BusinessLogicException;
import com.seb40_main_031.global.error.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;

//    private final PasswordEncoder passwordEncoder;
//    private final MemberAuthorityUtils authorityUtils;

    public Member createMember(Member member){
        verifyExistsEmail(member.getEmail());

//        String encryptedPassword = passwordEncoder.encode(member.getPassword());
//        member.setPassword(encryptedPassword);
//
//        List<String> roles = authorityUtils.createRoles(member.getEmail());
//        member.setRoles(roles);
        member.setRoles(Member.Roles.USER);

        return memberRepository.save(member);
    }

    public Member updateMember(Member member) {
        Member findMember = findVerifiedMember(member.getMemberId());

        Optional.ofNullable(member.getNickname())
                .ifPresent(nickname -> findMember.setNickname(nickname));
        Optional.ofNullable(member.getImg())
                .ifPresent(img -> findMember.setImg(img));
        Optional.ofNullable(member.getAbout())
                .ifPresent(about -> findMember.setAbout(about));
//        Optional.ofNullable(member.getRoles())
//                .ifPresent(roles -> findMember.setRoles(roles));
//        Optional.ofNullable(member.getPoint())
//                .ifPresent(point -> findMember.setPoint(point));

        return memberRepository.save(findMember);
    }

    public Member findMember(Long memberId) {
        return findVerifiedMember(memberId);
    }

    public List<Member> findMembers() {
        return memberRepository.findAll();
    }

    public void deleteMember(Long memberId) {
        /**
         * 해당 회원을 찾아와서 DB에서 삭제 시키는 것이 아닌
         * 상태를 휴면(DORMANT)로만 바꿔 놓음
         */
        Member findMember = findMember(memberId);
        findMember.setRoles(Member.Roles.DORMANT);
        memberRepository.save(findMember);
    }


    public void verifyExistsEmail(String email){
        Optional<Member> optionalMember = memberRepository.findByEmail(email);

        // 회원 가입할 때 이메일이 존재할 때 상태가 휴면(DORMANT)라면 예외 던져줌
        if (optionalMember.isPresent()) {
            if (optionalMember.get().getRoles() == Member.Roles.DORMANT)
                throw new BusinessLogicException(ExceptionCode.MEMBER_DORMANT);

            throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
        }
    }

    public Member findVerifiedMember(Long memberId) {
        Optional<Member> optionalMember = memberRepository.findById(memberId);
        Member findMember = optionalMember.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

        return findMember;
    }


    /**
     * 회원 정보 조회 화면에 읽었던 책과 썼던 리뷰내용 전달해 주기 위해
     * 추후 추가될 부분
     */
//    public List<Book> findBooks(Long memberId) {
//        return bookRepository.findByMemberMemberId(memberId).orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
//    }
//
//    public List<Review> findReviews(Long memberId) {
//        Optional<List<Review>> optionalReviewList = reviewRepository.findByMemberMemberId(memberId);
//        List<Review> findReviewList =
//                optionalReviewList.orElseThrow(() ->
//                        new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
//
//        return findReviewList.size();
//    }
}
