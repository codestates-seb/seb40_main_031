import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

// import required modules
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { List, NumberSpan } from 'components/@layout/swiper/Swiper.style';
import { Title } from 'components/@layout/book/Book.style';
import axios from 'api/axios';
import { useNavigate } from 'react-router-dom';

SwiperCore.use([Autoplay, Navigation]);

const BookPage = ({ title, url, popular }) => {
  const [Book, setBook] = useState([]);

  const getBestBook = async () => {
    const res = await axios.get(url);
    setBook(res.data);
    return res.data;
  };

  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate(e);
  };

  useEffect(() => {
    getBestBook();
  });

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
        {Book.map((book, i) => (
          <SwiperSlide key={book.bookId}>
            <div style={{ height: '250px' }}>
              <img
                src={book.coverLargeUrl}
                title={book.title}
                onClick={() => {
                  handleClick(`books/${book.bookId}`);
                }}
              />
              {popular ? <NumberSpan>{i + 1}</NumberSpan> : null}
            </div>
            <div title={book.title}>{book.title}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </List>
  );
};

export default BookPage;
