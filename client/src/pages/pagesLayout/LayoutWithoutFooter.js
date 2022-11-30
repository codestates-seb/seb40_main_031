import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Nav } from 'components';
import {
  WholeWrapperDiv,
  ContentDiv,
  MainDiv,
} from 'pages/pagesLayout/Layout.style';

const LayoutWithoutFooter = () => {
  return (
    <WholeWrapperDiv>
      <ContentDiv>
        <Nav />
        <MainDiv>
          <Suspense fallback={<Suspense />}>
            <Outlet />
          </Suspense>
        </MainDiv>
      </ContentDiv>
    </WholeWrapperDiv>
  );
};

export default LayoutWithoutFooter;
