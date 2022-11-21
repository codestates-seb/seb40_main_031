import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Nav, Footer } from 'components';
import {
  WholeWrapperDiv,
  ContentDiv,
  MainDiv,
} from 'pages/pagesLayout/Layout.style';

const Layout = () => {
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
      <Footer />
    </WholeWrapperDiv>
  );
};

export default Layout;
