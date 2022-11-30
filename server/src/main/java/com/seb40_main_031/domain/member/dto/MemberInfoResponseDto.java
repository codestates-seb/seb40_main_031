package com.seb40_main_031.domain.member.dto;

import com.seb40_main_031.global.common.dto.PageInfo;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.data.domain.Page;

import java.util.List;

@AllArgsConstructor
@Getter
public class MemberInfoResponseDto<T> {
    private T member;
//    private List<T> bookList;
    private List<T> reviewList;
    private PageInfo pageInfo;

    public MemberInfoResponseDto(T member, List<T> reviewList, Page page) {
        this.member = member;
        this.reviewList = reviewList;
        this.pageInfo = new PageInfo(page.getNumber() + 1,
                page.getSize(), page.getTotalElements(), page.getTotalPages());
    }

//    public MemberInfoResponseDto(T member, List<T> bookList, List<T> reviewList, Page page) {
//        this.member = member;
//        this.bookList = bookList;
//        this.reviewList = reviewList;
//        this.pageInfo = new PageInfo(page.getNumber() + 1,
//                page.getSize(), page.getTotalElements(), page.getTotalPages());
//    }
}
