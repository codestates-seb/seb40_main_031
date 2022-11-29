import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

// import required modules
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import Dummybooks from 'components/@layout/book/Dummybooks';
import { List } from 'components/@layout/swiper/Swiper.style';
import { Title } from 'components/@layout/book/Book.style';
import axios from 'axios';
import { BESTBOOK_URL } from 'api';

SwiperCore.use([Autoplay, Navigation]);

const BookPage = ({ title }) => {
  // const getBestBook = async () => {
  //   const res = await axios.get(BESTBOOK_URL);
  //   return res.data;
  // };

  return (
    <List>
      <Title>{title}</Title>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        speed={3000}
        slidesPerGroup={4}
        navigation={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          550: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          800: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          1000: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
        }}
      >
        {Dummybooks.map((book) => (
          <SwiperSlide key={book.id}>
            <img src={book.imgURL}></img>
            <div>{book.name}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </List>
  );
};

export default BookPage;