import React, { useEffect, useRef } from 'react';
import {
  Template,
  UserInfo,
  UserIcon,
  UserName,
  Content,
  BottomContent,
  LeftIcon,
  RightIconUpdate,
  RightIconDelete,
  RightIconBox,
  LeftIconBox,
  LeftText,
  ReviewCount,
} from 'components/@layout/reviewContent/ReviewBig.style';
import { FaRegUserCircle, FaRegThumbsUp } from 'react-icons/fa';
import { HiOutlinePencil } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

import { useState } from 'react';
import axios from 'api/axios';
import { REVEIW_DETAIL_URL } from 'api';

// import DummyReviews from 'components/@layout/reviewContent/DummyReviews';
import Loading from 'components/@layout/loading/Loading';

// 전역변수 로 number 를 0으로 지정해주었다. 0으로 지정해준 이유는 맨 첫번째 usestate에서 실행된 (0,3)을 먼저
// 실행했기 때문에(처음에 랜더링이 되어서) 밑에 있는 number += 3이 먼저 실행이 되어서 number가 3으로 바뀌게
// 되고 그 상태에서 fetchdata를 불러주기 때문에 (3, 6) 증감연산자 때문에 (6,9) 순차적으로 3씩 증가.

const ReviewBig = () => {
  const { id } = useParams();
  const [reviewBigs, setreviewBigs] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [content, setContent] = useState('');
  const [datalength, setDatalength] = useState();
  const number = useRef(0);
  const tempBigs = useRef([]);

  const contentHandler = (e) => {
    setContent(e.target.value);
  };

  const getReviewDetail = async () => {
    const res = await axios.get(`${REVEIW_DETAIL_URL}/${id}`);
    console.log(res.data);
    console.log(res.data.length);
    setDatalength(res.data.length);
    tempBigs.current = res.data;
    setreviewBigs(tempBigs.current.slice(0, 3));
    number.current = 3;
    return res.data;
  };

  const deleteReviewDetail = (id) => {
    let accessToken = sessionStorage.getItem('Authorization');
    let deleteId = id;
    axios
      .delete(
        `${REVEIW_DETAIL_URL}/${deleteId}`,
        {
          reviewId: deleteId,
        },
        {
          headers: {
            Authorization: accessToken,
          },
        },
      )
      .then((res) => {
        console.log(res);
      });
  };

  const updateReviewDetail = () => {
    let accessToken = sessionStorage.getItem('Authorization');

    axios
      .patch(
        `${REVEIW_DETAIL_URL}/${id}`,
        {
          content: content,
          reviewId: id,
        },
        {
          headers: {
            Authorization: accessToken,
          },
        },
      )
      .then((res) => {
        console.log(res);
      });
  };
  useEffect(() => {
    getReviewDetail();
    console.log(reviewBigs.slice(number.current, number.current + 3));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log(reviewBigs);
  }, [reviewBigs]);

  const fetchData = () => {
    if (reviewBigs.length < tempBigs.current.length) {
      // 데이터 받아오는 개수에 따라 수정 필요(else문 실행 여부때문에)

      setTimeout(() => {
        setreviewBigs((prev) => [
          ...prev,
          ...tempBigs.current.slice(number.current, number.current + 3),
        ]);
        number.current += 3;
      }, 1000);
    } else {
      setHasMore(false);
    }
  };

  return (
    <div>
      <InfiniteScroll
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
        dataLength={reviewBigs.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<Loading width='30px' height='30px' />}
      >
        <ReviewCount>리뷰 개수: {datalength} 개</ReviewCount>

        {reviewBigs &&
          reviewBigs.map((reviewBig) => {
            return (
              <Template key={reviewBig.reviewId}>
                <UserInfo>
                  <UserIcon>
                    <FaRegUserCircle />
                  </UserIcon>
                  <UserName>{reviewBig.nickname}</UserName>
                </UserInfo>
                <Content>{reviewBig.content}</Content>
                <BottomContent>
                  <LeftIconBox>
                    <LeftIcon>
                      <FaRegThumbsUp />
                    </LeftIcon>
                    <LeftText>{reviewBig.likeCount}</LeftText>
                  </LeftIconBox>
                  <RightIconBox>
                    <RightIconUpdate
                      onChange={contentHandler}
                      onClick={updateReviewDetail}
                    >
                      <HiOutlinePencil />
                    </RightIconUpdate>
                    <RightIconDelete onClick={() => deleteReviewDetail(id)}>
                      <MdClose />
                    </RightIconDelete>
                  </RightIconBox>
                </BottomContent>
              </Template>
            );
          })}
      </InfiniteScroll>
    </div>
  );
};
export default ReviewBig;
