import React from 'react';
import {
  Template,
  Content,
  BottomContent,
  GoodIcon,
  LeftText,
  Display,
} from 'components/@layout/reviewContent/ReviewSmall.style';
// import DummyReviews from 'components/@layout/reviewContent/DummyReviews';
import { FaRegThumbsUp } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import axios from 'api/axios';
import { BOOK_BOOKDETAIL_URL } from 'api';
import { useParams } from 'react-router-dom';

const ReviewSmall = () => {
  const { id } = useParams();
  const [reviewSmalls, setReviewSmall] = useState([]);

  const getReviewSmall = async () => {
    const res = await axios.get(`${BOOK_BOOKDETAIL_URL}/${id}`);

    console.log(res.data);
    setReviewSmall(res.data.reviews);

    return res.data.reviews;
  };

  useEffect(() => {
    getReviewSmall();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <Display>
        {reviewSmalls &&
          reviewSmalls.slice(0, 2).map((reviewSmall) => {
            return (
              <Template key={reviewSmall.reviewId}>
                <Content>{reviewSmall.content}</Content>
                <BottomContent>
                  <GoodIcon>
                    <FaRegThumbsUp />
                  </GoodIcon>
                  <LeftText>{reviewSmall.likeCount}</LeftText>
                </BottomContent>
              </Template>
            );
          })}
      </Display>
    </div>
  );
};
export default ReviewSmall;
