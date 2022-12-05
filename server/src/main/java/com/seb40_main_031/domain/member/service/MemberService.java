package com.seb40_main_031.domain.member.service;

import com.seb40_main_031.domain.books.dto.BookToMemberResponse;
import com.seb40_main_031.domain.books.entity.Book;
import com.seb40_main_031.domain.books.mapper.BookMapper;
import com.seb40_main_031.domain.books.repository.BookRepository;
import com.seb40_main_031.domain.member.entity.Member;
import com.seb40_main_031.domain.member.repository.MemberRepository;
import com.seb40_main_031.domain.review.dto.ReviewToMemberResponse;
import com.seb40_main_031.domain.review.mapper.ReviewMapper;
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

import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MemberService {
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;
    private final MemberRepository memberRepository;
    private final ReviewRepository reviewRepository;
    private final BookRepository bookRepository;
    private final ReviewMapper reviewMapper;
    private final BookMapper bookMapper;


    public Member createMember(Member member){
        if (member.getPassword() == null) {
            Optional<Member> findMember = memberRepository.findByEmail(member.getEmail());
            if (findMember.isPresent()) return member;
        }
        else if (member.getPassword() != null) {
            verifyExistsEmail(member.getEmail());
            String encryptedPassword = passwordEncoder.encode(member.getPassword());
            member.setPassword(encryptedPassword);
        }
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
        Member findMember = findMember(memberId);
        memberRepository.delete(findMember);
    }

    public void verifyExistsEmail(String email){
        Optional<Member> optionalMember = memberRepository.findByEmail(email);
        if (optionalMember.isPresent()) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
        }
    }

    public Member findVerifiedMember(Long memberId) {
        return memberRepository.findById(memberId).orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
    }

    public List<ReviewToMemberResponse> getReviews(Long memberId) {
        List<ReviewToMemberResponse> reviewResponse =
                reviewRepository.findAllByMemberMemberIdOrderByReviewIdDesc(memberId).stream()
                .map(review -> reviewMapper.reviewToReviewMemberResponse(review))
                .collect(Collectors.toList());
        reviewResponse.stream()
                .forEach(reviewRes -> reviewRes.setMemberId(memberId));

        return reviewResponse;
    }

    public List<BookToMemberResponse> getBooks(Long memberId) {
        List<Long> bookIdList = reviewRepository.findAllReviewedBookIdByMemberId(memberId);
        List<Book> bookList = new ArrayList<>();
        for (int i = 0; i < bookIdList.size(); i++) {
            Long bookId = bookIdList.get(i);
            bookList.add(getBook(bookId).orElseThrow(() ->
                    new BusinessLogicException(ExceptionCode.BOOK_NOT_FOUND)));
        }
        List<BookToMemberResponse> bookResponse = bookList.stream()
                .map(book -> bookMapper.bookToMemberResponse(book))
                .collect(Collectors.toList());

        return bookResponse;
    }
    public Optional<Book> getBook(Long bookId) {
        return bookRepository.findByBookId(bookId);
    }
}
