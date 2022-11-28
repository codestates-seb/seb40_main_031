import styled from 'styled-components';
import { Theme } from 'style';
import { lighten } from 'polished';

const List = styled.div`
  width: 100%;
  .swiper-container {
    width: 100%;
    padding-left: 50px;
    padding-right: 50px;
  }
  .swiper-slide {
    display: flex;
    justify-content: center;
    width: 200px;
    text-align: center;
    font-size: 18px;
    background: #eee;
    div {
      font-size: 1.3rem;
    }
  }
  .swiper-slide img {
    display: block;
    width: 200px;
    object-fit: cover;
  }
  .swiper-button-prev {
    color: ${lighten(0.1, Theme.PRIMARY.GREEN)};
  }
  .swiper-button-next {
    color: ${lighten(0.1, Theme.PRIMARY.GREEN)};
  }
  .swiper-pagination {
    .swiper-pagination-bullet {
      background-color: ${lighten(0.1, Theme.PRIMARY.GREEN)};
    }
  }
`;

export { List };
