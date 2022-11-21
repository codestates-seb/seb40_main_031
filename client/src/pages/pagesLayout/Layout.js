import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Nav, Footer } from 'components';
import { MainDiv } from 'pages/pagesLayout/Layout.style';

const Layout = () => {
  return (
    <>
      <Nav />
      <MainDiv>
        <Suspense fallback={<Suspense />}>
          <Outlet />
        </Suspense>
      </MainDiv>
      <Footer />
    </>
  );
};

export default Layout;
