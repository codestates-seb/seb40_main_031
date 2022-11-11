import React from 'react';

import ROUTES from "../constants/routes"
import Layout from "./PagesLayout/Layout"

import Main from "./Main/Main"
import Login from "./Login/Login"


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
        }
    ]
    }
  ];
  
  export default PAGES;
  