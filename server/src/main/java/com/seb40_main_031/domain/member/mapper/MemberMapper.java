package com.seb40_main_031.domain.member.mapper;

import com.seb40_main_031.domain.books.dto.BookToMemberResponse;
import com.seb40_main_031.domain.member.dto.MemberDto;
import com.seb40_main_031.domain.member.entity.Member;
import com.seb40_main_031.domain.review.dto.ReviewToMemberResponse;
import com.seb40_main_031.domain.review.mapper.ReviewMapper;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring", uses = ReviewMapper.class)
public interface MemberMapper {
    Member memberPostToMember(MemberDto.Post requestBody);
    Member memberPatchToMember(MemberDto.Patch requestBody);
    MemberDto.Response memberToMemberResponse(Member member);
    List<MemberDto.Response> membersToMemberResponse(List<Member> members);
    MemberDto.MyPageResponse memberToReviewDtoResponse(Member member, List<BookToMemberResponse> bookList, List<ReviewToMemberResponse> reviewList);

}
