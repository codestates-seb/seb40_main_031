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
    cursor: pointer;
    div {
      font-size: 20px;
      display: inline-block;
      max-width: 205px;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
  }
  .swiper-button-prev {
    color: ${lighten(0.1, Theme.PRIMARY.GREEN)};
    @media screen and (max-width: 450px) {
      display: none;
    }
  }
  .swiper-button-next {
    color: ${lighten(0.1, Theme.PRIMARY.GREEN)};
    @media screen and (max-width: 450px) {
      display: none;
    }
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
