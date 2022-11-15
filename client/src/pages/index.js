import React from 'react';

import ROUTES from '../constants/Routes';
import Layout from './pagesLayout/Layout';

import Main from './main/Main';
import Login from './login/Login';

// Layout 하위로 페이지 라우팅
const PAGES = [
  {
    element: <Layout />,
    children: [
      {
        name: ROUTES.INDEX.name,
        path: ROUTES.INDEX.path,
        element: <Main />,
      },
      {
        name: ROUTES.LOGIN.name,
        path: ROUTES.LOGIN.path,
        element: <Login />,
      },
    ],
  },
];

export default PAGES;
