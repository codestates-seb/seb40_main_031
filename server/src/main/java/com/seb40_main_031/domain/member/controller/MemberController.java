package com.seb40_main_031.domain.member.controller;

import com.seb40_main_031.domain.member.dto.MemberDto;
import com.seb40_main_031.domain.member.entity.Member;
import com.seb40_main_031.domain.member.mapper.MemberMapper;
import com.seb40_main_031.domain.member.service.MemberService;
import com.seb40_main_031.global.common.dto.SingleResponseDto;
import com.seb40_main_031.global.error.exception.BusinessLogicException;
import com.seb40_main_031.global.error.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/members")
@Validated
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;
    private final MemberMapper mapper;

    /**
     * 1. 회원가입
     */
    @PostMapping("/signup")
    public ResponseEntity createMember(@Valid @RequestBody MemberDto.Post requestBody){

//        Member member = Member.builder()
//                .email(request.getEmail())
//                .nickname(request.getNickname())
//                .password(request.getPassword())
//                .build();
        Member member = mapper.memberPostToMember(requestBody);
        Member createdMember = memberService.createMember(member);
        MemberDto.Response response = mapper.memberToMemberResponse(createdMember);

        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.CREATED);
    }

    /**
     * 2. 로그 아웃
     */
    @GetMapping("/logout")
    public ResponseEntity logout(HttpServletRequest request) {
        HttpSession session = request.getSession();

        session.invalidate();

        return new ResponseEntity(HttpStatus.OK);
    }

    /**
     * 3. 회원 정보 수정
     */
    @PatchMapping("/edit/{member-id}")
    public ResponseEntity updateMember(@PathVariable("member-id") @Positive Long memberId,
                                       @RequestBody @Valid MemberDto.Patch requestBody){

        requestBody.setMemberId(memberId);
        Member member = memberService.updateMember(mapper.memberPatchToMember(requestBody));
        MemberDto.Response response = mapper.memberToMemberResponse(member);

        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    /**
     * 4. 회원 정보 조회
     */
    @GetMapping("/{member-id}")
    public ResponseEntity getMember(@PathVariable("member-id") @Positive Long memberId){

        // todo : 회원 정보 조회 ( 마이 페이지 )
        Member member = memberService.findMember(memberId);
        MemberDto.Response response = mapper.memberToMemberResponse(member);

        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getMembers(){

        /**
         * 전체 회원 조회
         */
        List<Member> members = memberService.findMembers();
        List<MemberDto.Response> response =
                members.stream()
                        .map(member -> mapper.memberToMemberResponse(member))
                        .collect(Collectors.toList());

        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    /**
     * 5. 회원 탈퇴
     */
    @DeleteMapping("/{member-id}")
    public ResponseEntity deleteMember(@PathVariable("member-id") @Positive Long memberId){

        /**
         * todo : 회원 탈퇴 (memberStatus 변경) , 로그인 과정에서 status가 현재 사용중인지 확인해야하는 로직이 필요할수도?
         *   그러면 로그인을 컨트롤러로 받아서 해야하는건가?
         */
        memberService.deleteMember(memberId);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }


}
