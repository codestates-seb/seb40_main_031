import React, { useRef, useEffect, useState } from 'react';
import {
  NewModalBackground,
  NewContainerDiv,
  NewHeaderDiv,
  NewTitleSpan,
  NewCloseIconSpan,
  NewReviewTextarea,
  NewFooterDiv,
} from 'components/@layout/modal/PatchModal.style';
import { IoCloseOutline } from 'react-icons/io5';
import { Button } from 'components';
import axios from 'api/axios';
import { BOOK_BOOKDETAIL_URL, REVEIW_DETAIL_URL } from 'api';
import { useParams } from 'react-router-dom';
import { modalContent } from 'atom';
import { useRecoilState } from 'recoil';

const PatchModal = ({ setShow, idx }) => {
  const out = useRef();
  const { id } = useParams();
  const [bookTitle, setBookTitle] = useState([]);
  const [reviews, setReviews] = useRecoilState(modalContent);
  const [patchcontents, setPatchContents] = useState('');

  const getReviewDetailed = async () => {
    const res = await axios.get(`${REVEIW_DETAIL_URL}/${id}`);
    setReviews(res.data);
    return res.data;
  };

  useEffect(() => {
    getReviewDetailed();
    // eslint-disable-next-line
  }, []);

  const contentsHandler = (e) => {
    setPatchContents(e.target.value);
  };

  const closeModalHandler = () => {
    setShow(false);
  };

  const getBookDetail = async () => {
    const res = await axios.get(`${BOOK_BOOKDETAIL_URL}/${id}`);
    setBookTitle(res.data);
    return res.data;
  };

  useEffect(() => {
    getBookDetail();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    //모달창 화면이 처음에 랜더링이 되었을때
    document.body.style.cssText = `  
      position: fixed;  
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  const UpdateReviewDetail = () => {
    let accessToken = sessionStorage.getItem('Authorization');
    setShow(false);
    axios
      .patch(
        `${REVEIW_DETAIL_URL}/${reviews[idx].reviewId}`,
        {
          content: patchcontents,
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
        console.log(err);
      });
  };

  return (
    <div>
      <NewModalBackground
        ref={out}
        onClick={(e) => {
          if (e.target === out.current) setShow(false);
        }}
      >
        {reviews &&
          reviews.map((review) => {
            return (
              <NewContainerDiv key={review.reviewId}>
                <NewHeaderDiv>
                  <NewTitleSpan>{bookTitle.title}</NewTitleSpan>
                  <NewCloseIconSpan>
                    <IoCloseOutline size='45' onClick={closeModalHandler} />
                  </NewCloseIconSpan>
                </NewHeaderDiv>
                <NewReviewTextarea
                  type='text'
                  placeholder='수정하시고 싶은 내용을 입력해주세요.'
                  onChange={contentsHandler}
                />
                <NewFooterDiv>
                  <Button
                    text='수정'
                    width='200px'
                    height='60px'
                    onClick={() => UpdateReviewDetail(review.reviewId)}
                  />
                </NewFooterDiv>
              </NewContainerDiv>
            );
          })}
      </NewModalBackground>
    </div>
  );
};
export default PatchModal;
