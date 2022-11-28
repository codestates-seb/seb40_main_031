import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';

import { List } from 'components/main/MainSwiper.style';

SwiperCore.use([Autoplay, Navigation, Pagination]);

const MainSwiper = () => {
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
        speed={2000}
        slidesPerGroup={1}
        navigation={true}
        pagination={true}
      >
        <SwiperSlide>
          <img src='https://an2-img.amz.wtchn.net/image/v2/QAYGCBozk5Op9FhbtLpuSg.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk1qZ3dlRFF3TUhFNE1DSmRMQ0p3SWpvaUwzWXhMM2gwWjJoaWIyWndZM2Q1T0hsd2VEVnRhbU56SW4wLm5mc1FNMnI5Q0VmSGFKUTRkRk5ocm1FRXFEdTBkemNYcE5hYXdUbC1fakk' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://an2-img.amz.wtchn.net/image/v2/fUK_R2MfkYEyPV7rIqE_tA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk1qZ3dlRFF3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwySnZiMnN2TVRZME5UazVNRGt6T1RnM01qQXdPREExTmlKOS5Xa0Z2aDloRE5kNjJpLS1UaVUyM0NtODMyZVpxU25uYTFiTl9BdHJXdU5F' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://an2-img.amz.wtchn.net/image/v2/1vHVMgi5VwonuTKYmV19fQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk1qZ3dlRFF3TUhFNE1DSmRMQ0p3SWpvaUwzWXhMM2R5ZVRCNmFXTnZhVEUxZDJseWVHbG5kVzFwSW4wLmRielV6R015V1NBdGY3Qmk5bEhxeThkYTF3RkJOTkFfRnRHSEhNOTBpNkE' />
        </SwiperSlide>
      </Swiper>
    </List>
  );
};

export default MainSwiper;
