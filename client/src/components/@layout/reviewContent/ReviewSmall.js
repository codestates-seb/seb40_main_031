import React from 'react';
import {
  Template,
  Content,
  BottomContent,
  GoodIcon,
  LeftText,
  Display,
} from 'components/@layout/reviewContent/ReviewSmall.style';
import DummyReviews from 'components/@layout/reviewContent/DummyReviews';
import { FaRegThumbsUp } from 'react-icons/fa';
import { useState } from 'react';

const ReviewSmall = () => {
  const [reviewSmalls, setReviewSmall] = useState(DummyReviews.slice(0, 2));
  return (
    <div>
      <Display>
        {reviewSmalls.map((reviewSmall) => {
          return (
            <Template key={reviewSmall.id}>
              <Content>{reviewSmall.content}</Content>
              <BottomContent>
                <GoodIcon>
                  <FaRegThumbsUp />
                </GoodIcon>
                <LeftText>{reviewSmall.vote}</LeftText>
              </BottomContent>
            </Template>
          );
        })}
      </Display>
    </div>
  );
};
export default ReviewSmall;