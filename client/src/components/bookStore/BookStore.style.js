import styled from 'styled-components';

const BookStoreDiv = styled.div`
  width: 300px;
  height: 440px;
  border: 1px solid darkgray;
  border-radius: 5px;
  padding: 50px 30px 30px 30px;
`;

const BookBuy = styled.div`
  height: 60px;
  font-size: 30px;
  font-weight: bold;
`;

const BookBuyCategory = styled.div`
  height: 100px;
  font-size: 30px;
  display: flex;
`;

const BookBuyImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid darkgray;
  cursor: pointer;
  position: relative;
  z-index: 1;
  margin-top: 10px;
`;

const BookStoreName = styled.div`
  padding: 15px;
  font-size: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export { BookStoreDiv, BookBuy, BookBuyCategory, BookBuyImg, BookStoreName };
