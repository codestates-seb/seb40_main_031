package com.seb40_main_031.domain.member.mapper;

import com.seb40_main_031.domain.member.dto.MemberDto;
import com.seb40_main_031.domain.member.entity.Member;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    Member memberPostToMember(MemberDto.Post requestBody);
    Member memberPatchToMember(MemberDto.Patch requestBody);
    MemberDto.Response memberToMemberResponse(Member member);
}
