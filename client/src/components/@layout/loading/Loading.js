import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import { Container } from 'components/@layout/loading/Loading.style';
import { Theme } from 'style';
const Loading = ({ width, height }) => {
  return (
    <>
      <Container width={width} height={height}>
        <BeatLoader color={Theme.PRIMARY.GREEN_DARK} />
      </Container>
    </>
  );
};
export default Loading;
