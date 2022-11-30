import React from 'react';
import { Template } from 'pages/reviewDetail/ReviewDetail.style';
import { ReviewBig } from 'components';

const ReviewDetail = () => {
  return (
    <Template>
      <ReviewBig />
    </Template>
  );
};
export default ReviewDetail;

{
  /* <InfiniteScroll
  dataLength={items.length} // 반복되는 컴포넌트의 개수
  next = {fetchData} // 스크롤이 바닥에 닿으면 데이터를 더 불러오는 함수
  hasMore={true}  // 추가 데이터 유무
  loader={<h4>Loading...</h4>} // 로딩스피너
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }
>
  {items}
</InfiniteScroll> */
}
