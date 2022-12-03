import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.width ? props.width : '100vw')};
  height: ${(props) => (props.height ? props.height : '100vh')};
`;

export { Container };
