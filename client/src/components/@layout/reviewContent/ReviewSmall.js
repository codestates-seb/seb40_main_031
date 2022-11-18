import React from "react";
import * as S from "./ReviewSmall.style";
import DummyReviewSmallDetails from "../../../dummyData/DummyReviewSmallDetail";
import { FaRegThumbsUp } from "react-icons/fa";
import { useState } from "react";

const ReviewSmall = () => {
  const [reviewSmalls, setReviewSmall] = useState(
    DummyReviewSmallDetails.slice(0, 2),
  );
  return (
    <div>
      <S.Display>
        {reviewSmalls.map((reviewSmall) => {
          return (
            <S.Template key={reviewSmall.id}>
              <S.Content>{reviewSmall.content}</S.Content>
              <S.BottomContent>
                <S.GoodIcon>
                  <FaRegThumbsUp />
                </S.GoodIcon>
                <S.LeftText>{reviewSmall.vote}</S.LeftText>
              </S.BottomContent>
            </S.Template>
          );
        })}
      </S.Display>
    </div>
  );
};
export default ReviewSmall;
