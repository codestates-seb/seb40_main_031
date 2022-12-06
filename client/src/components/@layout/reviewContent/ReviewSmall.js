import React, { useState, useEffect } from 'react';
import {
  Template,
  Content,
  BottomContent,
  GoodIcon,
  LeftText,
  Display,
} from 'components/@layout/reviewContent/ReviewSmall.style';
import { FaRegThumbsUp } from 'react-icons/fa';
import axios from 'api/axios';
import { BOOK_BOOKDETAIL_URL, REVIEW_LIKE_URL } from 'api';
import { useParams, useNavigate } from 'react-router-dom';
import { AlertModal } from 'components';

const ReviewSmall = () => {
  const { id } = useParams();
  const [reviewSmalls, setReviewSmall] = useState([]);
  const [alert, setAlert] = useState({
    open: false,
    title: '',
    message: '',
    callback: false,
  });

  const navigate = useNavigate();

  const getReviewSmall = async () => {
    const res = await axios.get(`${BOOK_BOOKDETAIL_URL}/${id}`);
    setReviewSmall(res.data.reviews);
    return res.data.reviews;
  };

  const likeCount = (reviewId) => {
    let accessToken = sessionStorage.getItem('Authorization');
    let userId = sessionStorage.getItem('UserId');
    axios
      .patch(
        REVIEW_LIKE_URL,
        {
          memberId: userId,
          reviewId: reviewId,
        },
        {
          headers: {
            Authorization: accessToken,
          },
        },
      )
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        if (sessionStorage.getItem('Authorization')) {
          sessionStorage.clear();
          setAlert({
            open: true,
            title: '로그인 만료',
            message: '세션이 만료되었습니다. 로그인 화면으로 이동합니다.',
            callback: function () {
              navigate('/login');
            },
          });
        } else {
          setAlert({
            open: true,
            title: '오류',
            message: '로그인이 필요합니다. 로그인 화면으로 이동합니다.',
            callback: function () {
              navigate('/login');
            },
          });
        }
      });
  };

  useEffect(() => {
    getReviewSmall();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <AlertModal
        open={alert.open}
        setPopup={setAlert}
        message={alert.message}
        title={alert.title}
        callback={alert.callback}
      />
      <div>
        <Display>
          {reviewSmalls &&
            reviewSmalls.slice(0, 2).map((reviewSmall) => {
              return (
                <Template key={reviewSmall.reviewId}>
                  <Content>{reviewSmall.content}</Content>
                  <BottomContent>
                    <GoodIcon onClick={() => likeCount(reviewSmall.reviewId)}>
                      <FaRegThumbsUp />
                    </GoodIcon>
                    <LeftText>{reviewSmall.likeCount}</LeftText>
                  </BottomContent>
                </Template>
              );
            })}
        </Display>
      </div>
    </>
  );
};
export default ReviewSmall;
