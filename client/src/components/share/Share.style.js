import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 48px);
  grid-column-gap: 8px;
  justify-content: center;
  align-items: center;
  height: 45px;
  background-color: #ccc;
  border: 2px solid #ddd;
  border-radius: 8px;
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(4, 40px);
    grid-column-gap: 2px;
  }
`;

const URLShareButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 3px;
  width: 30px;
  height: 30px;
  color: white;
  border-radius: 24px;
  border: 0px;
  font-weight: 800;
  span {
    font-size: 13px;
  }
  cursor: pointer;
  background-color: #7362ff;
  &:hover {
    background-color: #a99fee;
  }
`;
export { GridContainer, URLShareButton };
