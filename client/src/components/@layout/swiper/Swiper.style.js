import styled from 'styled-components';
import { Theme } from 'style';
import { lighten, darken } from 'polished';

const List = styled.div`
  .swiper-container {
    width: 100%;
    padding-left: 50px;
    padding-right: 50px;
  }
  .swiper-slide {
    text-align: center;
    background: #eee;
    cursor: pointer;
    div {
      font-size: 20px;
      display: inline-block;
      width: 200px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
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
    /* object-fit: cover; */
    position: relative;
  }
  .swiper-button-prev {
    color: ${lighten(0.1, Theme.PRIMARY.GREEN)};
  }
  .swiper-button-next {
    color: ${lighten(0.1, Theme.PRIMARY.GREEN)};
  }
`;

const NumberSpan = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  color: ${Theme.PRIMARY.WHITE};
  background-color: ${Theme.PRIMARY.GREEN_DARK};
  opacity: 0.8;
  border-radius: 10%;
  font-size: 20px;
  width: 30px;
  height: 30px;
`;

export { List, NumberSpan };
