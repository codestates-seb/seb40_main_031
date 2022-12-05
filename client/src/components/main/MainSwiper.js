import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';

import { List } from 'components/main/MainSwiper.style';

import axios from 'api/axios';
import { BOOK_RANDOM_URL } from 'api';

SwiperCore.use([Autoplay, Navigation, Pagination]);

const MainSwiper = () => {
  const [randomBook, setRandomBook] = useState([]);

  const getRandomBook = async () => {
    const res = await axios.get(BOOK_RANDOM_URL);
    setRandomBook(res.data.data);
    return res.data.data;
  };

  let pop = Math.floor(Math.random() * (randomBook.length - 3));

  useEffect(() => {
    getRandomBook();
    // eslint-disable-next-line
  }, []);

  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate(e);
  };

  const swiperRef = useRef(SwiperCore);
  const onInit = (Swiper) => {
    swiperRef.current = Swiper;
  };
  const handleMouseEnter = () => {
    if (swiperRef.current) swiperRef.current.autoplay.stop();
  };
  const handleMouseLeave = () => {
    if (swiperRef.current) swiperRef.current.autoplay.start();
  };

  return (
    <List onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Swiper
        onInit={onInit}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        speed={2000}
        slidesPerGroup={1}
        navigation={true}
        pagination={true}
      >
        {randomBook.splice(pop, 3).map((book, i) => (
          <SwiperSlide key={i}>
            <img
              src={book.coverLargeUrl}
              title={book.title}
              onClick={() => {
                handleClick(`bookdetail/${book.bookId}`);
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </List>
  );
};

export default MainSwiper;
