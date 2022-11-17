package com.seb40_main_031.member.controller;

import com.seb40_main_031.member.entity.Member;
import com.seb40_main_031.member.service.MemberService;
import com.seb40_main_031.member.dto.MemberDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/members")
@Validated
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;


    /**
     * 1. 회원가입
     */

    @PostMapping("/signup")
    public ResponseEntity createMember(@Valid@RequestBody MemberDto.RegisterRequest request){

        Member member = Member.builder()
                .email(request.getEmail())
                .nickname(request.getNickname())
                .password(request.getPassword())
                .build();

        Member result = memberService.createMember(member);

        return new ResponseEntity<>(result, HttpStatus.CREATED);
    }

    /**
     * 2. 로그 아웃
     */

    /**
     * 3. 회원 정보 수정
     */

    @PatchMapping("/{member-id}")
    public ResponseEntity updateMember(@PathVariable("member-id") @Positive long memberId,
                                       @RequestBody @Valid MemberDto.UpdateRequest request){

        // todo : 회원 정보 수정

        return new ResponseEntity<>(HttpStatus.OK);
    }

    /**
     * 4. 회원 정보 조회
     */

    @GetMapping("/{member-id}")
    public ResponseEntity getMember(@PathVariable("member-id") @Positive long memberId){

        // todo : 회원 정보 조회 ( 마이 페이지 )

        return new ResponseEntity<>(HttpStatus.OK);
    }

    /**
     * 5. 회원 탈퇴
     */


    @DeleteMapping("/{member-id}")
    public ResponseEntity deleteMember(@PathVariable("member-id") @Positive long memberId){

        /**
         * todo : 회원 탈퇴 (memberStatus 변경) , 로그인 과정에서 status가 현재 사용중인지 확인해야하는 로직이 필요할수도?
         *   그러면 로그인을 컨트롤러로 받아서 해야하는건가?
         */

        return null;
    }


}
