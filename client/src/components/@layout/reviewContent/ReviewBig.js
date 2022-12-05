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
import { useParams, useNavigate } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import PatchModal from '../modal/PatchModal';
import { useState } from 'react';
import axios from 'api/axios';
import { REVEIW_DETAIL_URL, REVIEW_LIKE_URL } from 'api';
import modalContent from 'atom/ModalContent';
import { useRecoilState } from 'recoil';
// import DummyReviews from 'components/@layout/reviewContent/DummyReviews';
import Loading from 'components/@layout/loading/Loading';
import { AlertModal } from 'components';

// 전역변수 로 number 를 0으로 지정해주었다. 0으로 지정해준 이유는 맨 첫번째 usestate에서 실행된 (0,3)을 먼저
// 실행했기 때문에(처음에 랜더링이 되어서) 밑에 있는 number += 3이 먼저 실행이 되어서 number가 3으로 바뀌게
// 되고 그 상태에서 fetchdata를 불러주기 때문에 (3, 6) 증감연산자 때문에 (6,9) 순차적으로 3씩 증가.

const ReviewBig = () => {
  const { id } = useParams();
  const [reviewBigs, setreviewBigs] = useRecoilState(modalContent);
  const [hasMore, setHasMore] = useState(true);
  const [content, setContent] = useState('');
  const [datalength, setDatalength] = useState();
  const [show, setShow] = useState(false);
  const number = useRef(0);
  const tempBigs = useRef([]);
  const [alert, setAlert] = useState({
    open: false,
    title: '',
    message: '',
    callback: false,
  });
  const navigate = useNavigate();

  const contentHandler = (e) => {
    setContent(e.target.value);
  };

  const patchHandler = () => {
    setShow(true);
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

  const deleteReviewDetail = (reviewId) => {
    let accessToken = sessionStorage.getItem('Authorization');

    axios
      .delete(`${REVEIW_DETAIL_URL}/${reviewId}`, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((res) => {
        console.log(res);
      })
      // .then(() => navigate(`reviewdetail/${id}`));

      .then(() => window.location.reload());
  };

  // const updateReviewDetail = () => {
  //   let accessToken = sessionStorage.getItem('Authorization');

  //   axios
  //     .patch(
  //       `${REVEIW_DETAIL_URL}/${id}`,
  //       {
  //         content: content,
  //         reviewId: id,
  //       },
  //       {
  //         headers: {
  //           Authorization: accessToken,
  //         },
  //       },
  //     )
  //     .then((res) => {
  //       console.log(res);
  //     });
  // };

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
        console.log(res);
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
    getReviewDetail();
    console.log(reviewBigs.slice(number.current, number.current + 3));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log(reviewBigs);
  }, [reviewBigs]);

  // useEffect(() => {
  //   deleteReviewDetail();
  // }, []);

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
    <>
      <AlertModal
        open={alert.open}
        setPopup={setAlert}
        message={alert.message}
        title={alert.title}
        callback={alert.callback}
      />
      <div>
        {show === true ? <PatchModal setShow={setShow} /> : null}
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
                      <LeftIcon onClick={() => likeCount(reviewBig.reviewId)}>
                        <FaRegThumbsUp />
                      </LeftIcon>
                      <LeftText>{reviewBig.likeCount}</LeftText>
                    </LeftIconBox>
                    <RightIconBox>
                      <RightIconUpdate
                        onChange={contentHandler}
                        onClick={patchHandler}
                      >
                        <HiOutlinePencil />
                      </RightIconUpdate>
                      <RightIconDelete
                        onClick={() => deleteReviewDetail(reviewBig.reviewId)}
                      >
                        <MdClose />
                      </RightIconDelete>
                    </RightIconBox>
                  </BottomContent>
                </Template>
              );
            })}
        </InfiniteScroll>
      </div>
    </>
  );
};
export default ReviewBig;
