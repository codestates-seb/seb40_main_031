import styled from 'styled-components';
import { Theme } from 'style';
import { lighten } from 'polished';

const List = styled.div`
  .swiper-container {
    width: 100%;
    padding-left: 50px;
    padding-right: 50px;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    div {
      font-size: 1.3rem;
    }
  }
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .swiper-button-prev {
    color: ${lighten(0.1, Theme.PRIMARY.GREEN_DARK)};
  }
  .swiper-button-next {
    color: ${lighten(0.1, Theme.PRIMARY.GREEN_DARK)};
  }
`;

export { List };
