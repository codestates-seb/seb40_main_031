import React from 'react';

import ROUTES from 'constants/Routes';
import Layout from 'pages/pagesLayout/Layout';

import Main from 'pages/main/Main';
import Login from 'pages/login/Login';
import Faq from 'pages/faq/Faq';
import BookDetail from 'pages/bookDetail/BookDetail';
import ReviewDetail from 'pages/reviewDetail/ReviewDetail';
import SearchDetail from 'pages/searchDetail/SearchDetail';
import SignUp from 'pages/signUp/SignUp';

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
      {
        name: ROUTES.FAQ.name,
        path: ROUTES.FAQ.path,
        element: <Faq />,
      },
      {
        name: ROUTES.BOOKDETAIL.name,
        path: ROUTES.BOOKDETAIL.path,
        element: <BookDetail />,
      },
      {
        name: ROUTES.REVIEWDETAIL.name,
        path: ROUTES.REVIEWDETAIL.path,
        element: <ReviewDetail />,
      },
      {
        name: ROUTES.SEARCHDETAIL.name,
        path: ROUTES.SEARCHDETAIL.path,
        element: <SearchDetail />,
      },
      {
        name: ROUTES.SIGNUP.name,
        path: ROUTES.SIGNUP.path,
        element: <SignUp />,
      },
    ],
  },
];

export default PAGES;