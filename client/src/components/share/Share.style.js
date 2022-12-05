import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 48px);
  grid-column-gap: 8px;
  justify-content: center;
  align-items: center;
`;

const URLShareButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 3px;
  width: 40px;
  height: 40px;
  color: white;
  border-radius: 24px;
  border: 0px;
  font-weight: 800;
  font-size: 18px;
  cursor: pointer;
  background-color: #7362ff;
  &:hover {
    background-color: #a99fee;
  }
`;
export { GridContainer, URLShareButton };
