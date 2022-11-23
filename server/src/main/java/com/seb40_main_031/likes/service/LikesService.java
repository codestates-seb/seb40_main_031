package com.seb40_main_031.likes.service;

import com.seb40_main_031.global.error.exception.BusinessLogicException;
import com.seb40_main_031.global.error.exception.ExceptionCode;
import com.seb40_main_031.likes.repository.LikesRepository;
import com.seb40_main_031.likes.entity.Likes;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LikesService {
    private final LikesRepository likesRepository;

    public LikesService(LikesRepository likesRepository) {
        this.likesRepository = likesRepository;
    }

    public Likes createLikes(Likes likes) {
        return likesRepository.save(likes);
    }

    public void deleteLikes(Likes likes){
        Likes findLikes = findVerifiedLikes(likes.getMemberId());
        likesRepository.delete(findLikes);
    }

    private Likes findVerifiedLikes(long memberId){
        Optional<Likes> optionalLikes =
                likesRepository.findById(memberId);
        Likes findLikes = optionalLikes.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.LIKES_NOT_FOUND));

        return findLikes;
    }
}
