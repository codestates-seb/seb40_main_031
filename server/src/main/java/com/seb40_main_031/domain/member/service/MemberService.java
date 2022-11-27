package com.seb40_main_031.domain.member.service;

import com.seb40_main_031.domain.books.entity.Book;
import com.seb40_main_031.domain.books.repository.BookRepository;
import com.seb40_main_031.domain.member.entity.Member;
import com.seb40_main_031.domain.member.repository.MemberRepository;
import com.seb40_main_031.domain.review.entity.Review;
import com.seb40_main_031.domain.review.repository.ReviewRepository;
import com.seb40_main_031.global.error.exception.BusinessLogicException;
import com.seb40_main_031.global.error.exception.ExceptionCode;
import com.seb40_main_031.global.security.utils.CustomAuthorityUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;
    private final ReviewRepository reviewRepository;
    private final BookRepository bookRepository;


    public Member createMember(Member member){
        verifyExistsEmail(member.getEmail());

        // Password 암호화
        String encryptedPassword = passwordEncoder.encode(member.getPassword());
        member.setPassword(encryptedPassword);

        // DB에 User Role 저장
        List<String> roles = authorityUtils.createRoles(member.getEmail());
        member.setRoles(roles);

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

    public Page<Member> findMembers(int page, int size) {
        return memberRepository.findAll(PageRequest.of(page, size,
                Sort.by("memberId").descending()));
    }

    public void deleteMember(Long memberId) {
        /**
         * 해당 회원을 찾아와서 DB에서 삭제 시키는 것이 아닌
         * 상태를 휴면(DORMANT)로만 바꿔 놓음
         */
        Member findMember = findMember(memberId);
//        findMember.setRole(Member.Role.DORMANT);
        memberRepository.delete(findMember);
//        memberRepository.save(findMember);
    }


    public void verifyExistsEmail(String email){
        Optional<Member> optionalMember = memberRepository.findByEmail(email);

        if (optionalMember.isPresent()) {
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
    public List<Review> getReviews(Long memberId) {
        return reviewRepository.findAllByMemberMemberIdOrderByReviewIdDesc(memberId);
    }

    public List<Long> findAllBookId(Long memberId) {
        return reviewRepository.findAllReviewedBookIdByMemberId(memberId);
    }
    public Optional<Book> getBook(Long bookId) {
        return bookRepository.findByBookId(bookId);
    }

//    public Page<Review> InitInfoReviews(Long memberId, int page, int size) {
//        Page<Review> reviewList = reviewRepository.findAllByMemberId(memberId, PageRequest.of(page, size, Sort.by("reviewId")));
//
//        return reviewList;
//    }
//    public Page<Book> InitInfoBooks(Long memberId, int page, int size) {
//        Page<Book> bookList = bookRepository.findAllByMemberId(memberId, PageRequest.of(page, size, Sort.by("bookId")));

//        List<Long> bookIdList = new ArrayList<>();
//        Iterator<Long> it = bookIdSet.iterator();
//        while (it.hasNext()) {
//            bookIdList.add(it.next());
//        }
//
//        List<Book> bookList = new ArrayList<>();
//        for (int i = 0; i < bookIdList.size(); i++) {
//            Long bookId = bookIdList.get(i);
//            bookRepository.find
//        }
//
//
//        List<Optional<Book>> bookList = bookIdList.stream()
//                .map(bookId -> bookRepository.findById(bookId))
//                .collect(Collectors.toList());

//        return bookList;
//    }
//    public List<Book> findBooks(Long memberId) {
//        return bookRepository.findByMemberMemberId(memberId).orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
//    }
//
//    public List<Review> findReviews(Long memberId, int page, int size) {
////        return memberRepository.findAll(PageRequest.of(page, size,
////                Sort.by("memberId").descending()));
//        Page<Review> reviewPage = reviewRepository.findAll(PageRequest.of(page, size, Sort.by("reviewId")));
//
//
//
//        Optional<List<Review>> optionalReviewList = reviewRepository.findById(memberId);
//        List<Review> findReviewList =
//                optionalReviewList.orElseThrow(() ->
//                        new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
//
//        return findReviewList.size();
//    }
}
