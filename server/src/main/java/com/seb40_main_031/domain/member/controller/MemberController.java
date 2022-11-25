package com.seb40_main_031.domain.member.controller;

import com.seb40_main_031.domain.books.dto.BookResponseDto;
import com.seb40_main_031.domain.books.entity.Book;
import com.seb40_main_031.domain.books.mapper.BookMapper;
import com.seb40_main_031.domain.member.dto.MemberDto;
import com.seb40_main_031.domain.member.entity.Member;
import com.seb40_main_031.domain.member.mapper.MemberMapper;
import com.seb40_main_031.domain.member.service.MemberService;
//import com.seb40_main_031.domain.review.dto.ReviewToMemberResponse;
import com.seb40_main_031.domain.review.entity.Review;
import com.seb40_main_031.domain.review.mapper.ReviewMapper;
import com.seb40_main_031.domain.member.dto.MemberInfoResponseDto;
import com.seb40_main_031.global.common.dto.MultiResponseDto;
import com.seb40_main_031.global.common.dto.SingleResponseDto;
import com.seb40_main_031.global.security.argumentresolver.LoginAccountId;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/members")
@Validated
@RequiredArgsConstructor
@CrossOrigin
public class MemberController {
    private final MemberService memberService;
    private final MemberMapper mapper;
    private final ReviewMapper reviewMapper;
    private final BookMapper bookMapper;
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

//    @GetMapping("/users/{member-id}")
//    public ResponseEntity getMember(@PathVariable("member-id") @Positive Long memberId){

        // todo : 회원 정보 조회 ( 마이 페이지 )
//        Member member = memberService.findMember(memberId);
//
//        Page<Review> reviewPage = memberService.InitInfoReviews(memberId, 0, 5);
//        List<ReviewToMemberResponse> reviews = reviewPage.getContent()
//                .stream().map(review -> reviewMapper.reviewToReviewMemberResponse(review))
//                .collect(Collectors.toList());

//        MemberDto.MyPageResponse infoResponse = mapper.memberToMemberInfoResponse(member);

//        Page<Book> bookPage = memberService.InitInfoBooks(memberId, 0, 5);

//        Set<Long> bookIdSet = new HashSet<>();
//        for (int i = 0; i < reviews.size(); i++) {
//            bookIdSet.add(reviews.get(i).getBookId());
//        }
//        List<Optional<Book>> optionalBooks = memberService.InitInfoBooks(bookIdSet, 0, 5);
//        List<BookResponseDto> books = optionalBooks.stream()
//                .map(book -> bookMapper.bookToBookResponseDto(book.orElseThrow(() ->
//                        new BusinessLogicException(ExceptionCode.BOOK_NOT_FOUND))))
//                .collect(Collectors.toList());

//        Answer findAnswer =
//                optionalAnswer.orElseThrow(() ->
//                        new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));


//        MemberDto.Response response = mapper.memberToMemberResponse(member);
//
//        return new ResponseEntity<>(new MemberInfoResponseDto(response, reviews, reviewPage), HttpStatus.OK);
//    }

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
        /**
         * todo : 회원 탈퇴 (memberStatus 변경) , 로그인 과정에서 status가 현재 사용중인지 확인해야하는 로직이 필요할수도?
         *   그러면 로그인을 컨트롤러로 받아서 해야하는건가?
         */
        memberService.deleteMember(memberId);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
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
}
