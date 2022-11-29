import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Nav } from 'components';
import {
  WholeWrapperDiv,
  ContentWithoutFooterDiv,
  MainDiv,
} from 'pages/pagesLayout/Layout.style';

const LayoutWithoutFooter = () => {
  return (
    <WholeWrapperDiv>
      <ContentWithoutFooterDiv>
        <Nav />
        <MainDiv>
          <Suspense fallback={<Suspense />}>
            <Outlet />
          </Suspense>
        </MainDiv>
      </ContentWithoutFooterDiv>
    </WholeWrapperDiv>
  );
};

export default LayoutWithoutFooter;
