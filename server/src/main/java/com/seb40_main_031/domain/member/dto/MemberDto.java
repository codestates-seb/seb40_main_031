package com.seb40_main_031.domain.member.dto;

import com.seb40_main_031.domain.member.entity.Member;
import com.seb40_main_031.domain.review.dto.ReviewResponseDto;
import com.seb40_main_031.domain.review.dto.ReviewToMemberResponse;
import com.seb40_main_031.domain.review.entity.Review;
import com.seb40_main_031.global.common.dto.PageInfo;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.domain.Page;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.util.List;

public class MemberDto {
    @Getter
    @AllArgsConstructor
    public static class Post {
        @Email
        @NotBlank
        private String email;

        @NotBlank(message = "비밀번호를 입력해 주세요.")
        private String password;

        @NotBlank
        private String nickname;
    }

    @Getter
    @Setter
    @AllArgsConstructor
//    @Builder    // 안에 쓸지 밖에 쓸지 좀 더 생각.
    public static class Patch {
        private Long memberId;
        private String nickname;
//        private String password;
        private String about;
        private String img;
        private int point;
//        private Member.Roles roles;

    }

    @Getter
    @AllArgsConstructor
    public static class Response {
        private Long memberId;
        private String email;
        private String nickname;
        private String about;
        private int point;
        private String img;
//        @Setter
//        private List<Review> reviewList;
//        private Member.Roles roles;
//        private List<BookDto.Response> bookList;
//        private List<ReviewDto.Response> reviewList;
//        private Member.Roles roles;
    }

    @AllArgsConstructor
    @Getter
    @Setter
    public static class MyPageResponse {
        private Long memberId;
        private String email;
        private String nickname;
        private String about;
        private String img;
//        @Setter
//        private List<ReviewToMemberResponse> reviewList;
        private List<ReviewResponseDto> reviews;
    }

}
