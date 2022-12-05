package com.seb40_main_031.domain.member.controller;

import com.seb40_main_031.domain.books.dto.BookToMemberResponse;
import com.seb40_main_031.domain.member.dto.MemberDto;
import com.seb40_main_031.domain.member.entity.Member;
import com.seb40_main_031.domain.member.mapper.MemberMapper;
import com.seb40_main_031.domain.member.service.MemberService;
import com.seb40_main_031.domain.review.dto.ReviewToMemberResponse;
import com.seb40_main_031.global.common.dto.MultiResponseDto;
import com.seb40_main_031.global.common.dto.SingleResponseDto;

import com.seb40_main_031.global.security.argumentresolver.LoginAccountId;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.*;

@RestController
@RequestMapping("/members")
@RequiredArgsConstructor
@CrossOrigin
public class MemberController {
    private final MemberService memberService;
    private final MemberMapper mapper;

    /**
     * 1. 회원가입
     */
    @PostMapping("/signup")
    public ResponseEntity createMember(@Valid @RequestBody MemberDto.Post requestBody){

        Member member = mapper.memberPostToMember(requestBody);
        Member createdMember = memberService.createMember(member);
        MemberDto.Response response = mapper.memberToMemberResponse(createdMember);

        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.CREATED);
    }

    /**
     * 3. 회원 정보 수정
     */
    @PatchMapping("/edit")
    public ResponseEntity updateMember(@Valid @RequestBody MemberDto.Patch requestBody,
                                       @LoginAccountId Long memberId){

        requestBody.setMemberId(memberId);
        Member member = memberService.updateMember(mapper.memberPatchToMember(requestBody));
        MemberDto.Response response = mapper.memberToMemberResponse(member);

        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    /**
     * 4. 회원 정보 조회
     */
    @GetMapping("/users/{memberId}")
    public ResponseEntity getMember(@PathVariable @Positive Long memberId){

        Member member = memberService.findMember(memberId);
        List<ReviewToMemberResponse> reviewResponse = memberService.getReviews(memberId);
        List<BookToMemberResponse> bookResponse = memberService.getBooks(memberId);
        MemberDto.MyPageResponse response = mapper.memberToReviewDtoResponse(member, bookResponse, reviewResponse);
        response.setReviewCount(reviewResponse.size());
        response.setBookCount(bookResponse.size());
        return new ResponseEntity(new SingleResponseDto<>(response), HttpStatus.OK);
    }

     /**
     * 전체 회원 조회
     */
    @GetMapping("/users")
    public ResponseEntity getMembers(@RequestParam(required = false, defaultValue = "1") int page,
                                     @RequestParam(required = false, defaultValue = "10") int size){

        Page<Member> pageMembers = memberService.findMembers(page - 1, size);
        List<Member> members = pageMembers.getContent();
        List<MemberDto.Response> response = mapper.membersToMemberResponse(members);

        return new ResponseEntity<>(new MultiResponseDto<>((response), pageMembers), HttpStatus.OK);
    }

    /**
     * 5. 회원 탈퇴
     */
    @DeleteMapping
    public ResponseEntity deleteMember(@LoginAccountId Long memberId){
        memberService.deleteMember(memberId);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
