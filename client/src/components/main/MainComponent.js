import React, { useEffect, useState } from 'react';
import {
  WrapperDiv,
  SuggestDiv,
  SuggestTextDiv,
  SuggestBookListDiv,
  TitleTextDiv,
  TextDiv,
  ListContentsDiv,
  ListDiv,
  DistanceDiv,
} from 'components/main/MainComponent.style';
import MainSwiper from 'components/main/MainSwiper';
import BookPage from 'components/@layout/swiper/Swiper';
import {
  BOOK_BEST_DOMESTIC_URL,
  BOOK_BEST_GLOBAL_URL,
  BOOK_NEW_DOMESTIC_URL,
  BOOK_NEW_GLOBAL_URL,
} from 'api';

const MainComponent = () => {
  const [date] = useState(new Date());
  const [hour] = useState(date.getHours());
  const [message, setMessage] = useState('');
  const [user] = useState({ name: '어머' });

  useEffect(() => {
    outputMessage();
  });

  const outputMessage = () => {
    hour >= 0 && hour < 6
      ? setMessage(`감성 충만한 새벽이네요, ${user.name}님.`)
      : hour >= 6 && hour < 11
      ? setMessage(`상쾌한 아침이에요 ! ${user.name}님!`)
      : hour >= 11 && hour < 14
      ? setMessage(`${user.name}님, 점심식사는 하셨나요?`)
      : hour >= 14 && hour < 17
      ? setMessage(`나른한 오후에 반가워요 ${user.name}님!`)
      : hour >= 17 && hour < 20
      ? setMessage(`책이 고픈 저녁시간이네요. ${user.name}님은요?`)
      : hour >= 20
      ? setMessage(`${user.name}님, 좋은 하루 마무리 되세요!`)
      : setMessage(`시간이 이상한데요? 어느 별에서 왔어요?`);
  };

  return (
    <WrapperDiv>
      <SuggestDiv>
        <SuggestTextDiv>
          <TextDiv>
            {message}
            <br />
            글길에서 추천드리는 책이에요!
          </TextDiv>
        </SuggestTextDiv>
        <SuggestBookListDiv>
          <MainSwiper />
        </SuggestBookListDiv>
      </SuggestDiv>
      <ListContentsDiv>
        <DistanceDiv>
          <TitleTextDiv>국내도서</TitleTextDiv>
          <ListDiv>
            <BookPage
              title='지금 인기 최고'
              url={BOOK_BEST_DOMESTIC_URL}
              popular
            ></BookPage>
          </ListDiv>
          <ListDiv>
            <BookPage
              title='방금 만나러 왔어요'
              url={BOOK_NEW_DOMESTIC_URL}
            ></BookPage>
          </ListDiv>
        </DistanceDiv>
        <DistanceDiv>
          <TitleTextDiv>해외도서</TitleTextDiv>
          <ListDiv>
            <BookPage
              title='지금 인기 최고'
              url={BOOK_BEST_GLOBAL_URL}
              popular
            ></BookPage>
          </ListDiv>
          <ListDiv>
            <BookPage
              title='방금 만나러 왔어요'
              url={BOOK_NEW_GLOBAL_URL}
            ></BookPage>
          </ListDiv>
        </DistanceDiv>
      </ListContentsDiv>
    </WrapperDiv>
  );
};

export default MainComponent;
