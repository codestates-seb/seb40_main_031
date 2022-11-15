import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Nav, Footer } from '../../components/@layout/index';

const Layout = () => {
  return (
    <>
      <Nav />
      <Suspense fallback={<Suspense />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default Layout;
