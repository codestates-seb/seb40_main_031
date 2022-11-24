package com.seb40_main_031.domain.member.entity;

import com.seb40_main_031.global.common.auditing.Auditable;
import com.seb40_main_031.likes.entity.Likes;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter // login setter에서 사용,  빌더 패턴 적용 전 setter 사용. 필요한 부분만 setter method로 변경 예정.
//@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Member extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MEMBER_ID")         // DB에 저장되는 요소는 대문자로 표기함.
    private Long memberId;

    @Column(name = "EMAIL", nullable = false, unique = true)
    private String email;

    @Column(name = "PASSWORD", nullable = false)
    private String password;

    @Column(name = "NICKNAME", nullable = false)
    private String nickname;

    @Column(name = "ABOUT")
    private String about;

    @Column(name = "MEMBER_IMG")
    private String img;     // s3에 저장된 URL String으로 받아서 저장.

    @Column(name = "POINT")
    private int point;

    // 애너테이션을 이용해 사용자 등록 시, 사용자의 권한을 등록하기 위한 권한 테이블을 생성
    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "member", cascade = CascadeType.REMOVE)
    private List<Likes> likes = new ArrayList<>();

    public void mappingMemberLike(Likes likes) {
        this.likes.add(likes);
    }

//    @OneToMany(mappedBy = "Member", targetEntity = Review.class)
//    private List<Review> reviews = new ArrayList<>();

//    @Enumerated(EnumType.STRING)
//    private Role role = Role.GUEST;

//    @Builder
//    public Member(String email, String password, String nickname) {
//        Assert.hasText(email,"email must not be empty");
//        Assert.hasText(password, "password must not be empty");
//        Assert.hasText(nickname, "nickname must not be empty");
//
//        this.email = email;
//        this.password = password;
//        this.nickname = nickname;
//    }

//    public enum Role {
//        ADMIN("관리자"),
//        USER("사용자"),
//        GUEST("손님"),
//        DORMANT("휴면상태");
//
//        @Getter
//        private String role;
//
//        Role(String role) {
//            this.role = role;
//        }
//    }

    // todo : chat, review, List<book> 추가
}
