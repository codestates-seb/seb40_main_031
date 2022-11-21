import React from 'react';
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
} from './ReviewBig.style';
import { FaRegUserCircle } from 'react-icons/fa';
import { FaRegThumbsUp } from 'react-icons/fa';
import { HiOutlinePencil } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';
import DummyReviewBigDetails from '../../../dummyData/DummyReviewBigDetail';
import Loading from '../loading/Loading';

// 전역변수 로 number 를 0으로 지정해주었다. 0으로 지정해준 이유는 맨 첫번째 usestate에서 실행된 (0,3)을 먼저
// 실행했기 때문에(처음에 랜더링이 되어서) 밑에 있는 number += 3이 먼저 실행이 되어서 number가 3으로 바뀌게
// 되고 그 상태에서 fetchdata를 불러주기 때문에 (3, 6) 증감연산자 때문에 (6,9) 순차적으로 3씩 증가.
let number = 0;

const ReviewBig = () => {
  const [reviewBigs, setreviewBigs] = useState(
    DummyReviewBigDetails.slice(0, 3),
  );
  const [hasMore, setHasMore] = useState(true);
  // const [reviewBigs, setreviewBigs] = useState(Array.from({length:10}));

  const fetchData = () => {
    if (reviewBigs.length < 30) {
      setTimeout(() => {
        setreviewBigs(
          reviewBigs.concat(DummyReviewBigDetails.slice(number, number + 3)),
        );
      }, 2000);
    } else {
      setHasMore(false);
    }
  };
  number += 3;

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
        endMessage={<h1 style={{ textAlign: 'center' }}>You are all set!</h1>}
      >
        {reviewBigs.map((reviewBig) => {
          return (
            <Template key={reviewBig.id}>
              <UserInfo>
                <UserIcon>
                  <FaRegUserCircle />
                </UserIcon>
                <UserName>{reviewBig.userName}</UserName>
              </UserInfo>
              <Content>{reviewBig.content}</Content>
              <BottomContent>
                <LeftIconBox>
                  <LeftIcon>
                    <FaRegThumbsUp />
                  </LeftIcon>
                  <LeftText>{reviewBig.vote}</LeftText>
                </LeftIconBox>

                <RightIconBox>
                  <RightIconUpdate>
                    <HiOutlinePencil />
                  </RightIconUpdate>
                  <RightIconDelete>
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
