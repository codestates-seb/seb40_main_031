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
    background: #eee;
    div {
      font-size: 20px;
      /* @media screen and (max-width: 500px) {
        font-size: 20px;
      }
      @media screen and (min-width: 501px) and (max-width: 550px) {
        font-size: 20px;
      }
      @media screen and (min-width: 551px) and (max-width: 800px) {
        font-size: 20px;
      }
      @media screen and (min-width: 801px) and (max-width: 1000px) {
        font-size: 20px;
      }*/
    }
  }
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .swiper-button-prev {
    color: ${lighten(0.1, Theme.PRIMARY.GREEN)};
  }
  .swiper-button-next {
    color: ${lighten(0.1, Theme.PRIMARY.GREEN)};
  }
`;

export { List };
