import React, { useEffect, useState } from 'react';
import * as S from './MainComponent.style';
import Book from '../@layout/book/Book';
import axios from 'axios';

// import dfs_xy_conv from './NxNyFunction'; 위치정보 관련

const MainComponent = () => {
  const WEATHER_URL = process.env.REACT_APP_WEATHER_API_URL;
  const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  const [date] = useState(new Date());
  const [baseDate] = useState(
    `${date.getFullYear()}${('0' + (1 + date.getMonth())).slice(-2)}${(
      '0' + date.getDate()
    ).slice(-2)}`,
  );
  const [hour] = useState(date.getHours());
  const [minute] = useState(date.getMinutes());
  const [message, setMessage] = useState('');

  const [user] = useState({ name: '어머' });

  /* 위치정보 관련
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    const [nx, setNx] = useState('');
    const [ny, setNy] = useState('');

    navigator.geolocation.getPosition(pos)

    setLatitude(Number(parseInt(pos.coords.latitude)));
    setLongitude(Number(parseInt(pos.coords.longitude)));

    setNx(dfs_xy_conv('toXY', latitude, longitude).x);
    setNy(dfs_xy_conv('toXY', latitude, longitude).y);
    
    console.log('latitude : ' + latitude);
    console.log('longitude : ' + longitude);
    console.log('nx : ' + nx);
    console.log('ny : ' + ny);
    
      const getWeather = async () => {
        await axios
          .get(WEATHER_URL, {
            params: {
              serviceKey: WEATHER_API_KEY,
              pageNo: 1,
              numOfRows: 1000,
              dataType: JSON,
              base_date: baseDate,
              base_time: `${hour}${minute}`,
              nx: nx,
              ny: ny,
            },
          })
          .then((res) => {
            console.log(res);
          });
      };
*/

  useEffect(() => {
    outputMessage();
    // getWeather();
  }, []);

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
    <S.WrapperDiv>
      <S.SuggestDiv>
        <S.SuggestTextDiv>
          <S.TextDiv>
            {message}
            <br />
            이렇게 날씨 좋은 날, 이런 책은 어떠세요?
          </S.TextDiv>
        </S.SuggestTextDiv>
        <S.SuggestBookListDiv>
          <S.BookCarouselDiv />
        </S.SuggestBookListDiv>
      </S.SuggestDiv>
      <S.ListContentsDiv>
        <S.TitleTextDiv>국내도서</S.TitleTextDiv>
        <S.ListDiv>
          <Book title='지금 인기 최고'></Book>
        </S.ListDiv>
        <S.ListDiv>
          <Book title='방금 만나러 왔어요'></Book>
        </S.ListDiv>
        <S.TitleTextDiv>해외도서</S.TitleTextDiv>
        <S.ListDiv>
          <Book title='지금 인기 최고'></Book>
        </S.ListDiv>
        <S.ListDiv>
          <Book title='방금 만나러 왔어요'></Book>
        </S.ListDiv>
      </S.ListContentsDiv>
    </S.WrapperDiv>
  );
};

export default MainComponent;
