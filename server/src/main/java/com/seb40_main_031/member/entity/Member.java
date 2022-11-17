package com.seb40_main_031.member.entity;

import com.seb40_main_031.audit.Auditable;
import lombok.*;
import org.springframework.util.Assert;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter // login setter에서 사용,  빌더 패턴 적용 전 setter 사용. 필요한 부분만 setter method로 변경 예정.
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Member extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MEMBER_ID")         // DB에 저장되는 요소는 대문자로 표기함.
    private Long memberId;


    @ElementCollection
    @Setter
    private List<String> roles = new ArrayList<>();


    @Column(name = "EMAIL", nullable = false, unique = true)
    private String email;

    @Setter
    @Column(name = "PASSWORD", nullable = false)
    private String password;

    @Setter
    @Column(name = "NICKNAME", nullable = false)
    private String nickname;

    @Setter
    @Column(name = "ABOUT")
    private String about;

    @Setter
    @Column(name = "MEMBER_IMG")
    private String img;     // s3에 저장된 URL String으로 받아서 저장.

    @Builder
    public Member(String email, String password, String nickname) {
        Assert.hasText(email,"email must not be empty");
        Assert.hasText(password, "password must not be empty");
        Assert.hasText(nickname, "nickname must not be empty");

        this.email = email;
        this.password = password;
        this.nickname = nickname;
    }

    // todo : chat, review, List<book> 추가
}
