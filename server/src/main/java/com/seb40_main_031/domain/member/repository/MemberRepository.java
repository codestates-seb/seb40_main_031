package com.seb40_main_031.domain.member.repository;

import com.seb40_main_031.domain.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {

//    @Query("SELECT m FROM Member m JOIN FETCH m.roles WHERE m.email = (:email)")
//    Optional<Member> findByEmail(String email);
    Optional<Member> findByEmail(String email);

}
