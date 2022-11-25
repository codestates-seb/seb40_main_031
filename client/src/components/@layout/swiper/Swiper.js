import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

// import required modules
import { Navigation } from 'swiper';
import Dummybooks from 'components/@layout/book/Dummybooks';
import { List } from 'components/@layout/swiper/Swiper.style';
import { Title } from 'components/@layout/book/Book.style';

const BookPage = ({ title }) => {
  return (
    <List>
      <Title>{title}</Title>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        // loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        breakpoints={{
          500: {
            slidesPerView: 1,
          },
          550: {
            slidesPerView: 2,
          },
          800: {
            slidesPerView: 3,
          },
          1000: {
            slidesPerView: 4,
          },
        }}
        modules={[Navigation]}
        className='mySwiper'
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
