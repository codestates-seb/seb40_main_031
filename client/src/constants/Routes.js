// 라우팅에 필요한 라우팅 컴포넌트에 대한 디테일들

const ROUTES = Object.freeze({
  INDEX: {
    path: '/',
    name: 'Index',
  },
  LOGIN: {
    path: '/login',
    name: 'Login',
  },
  FAQ: {
    path: '/faq',
    name: 'Faq',
  },
  BOOKDETAIL: {
    path: '/bookdetail/:id',
    name: 'BookDetail',
  },
  REVIEWDETAIL: {
    path: '/reviewdetail/:id',
    name: 'ReviewDetail',
  },
  SEARCHDETAIL: {
    path: '/searchdetail/:keyword',
    name: 'SearchDetail',
  },
  SIGNUP: {
    path: '/signup',
    name: 'SignUp',
  },
  USERPAGE: {
    path: '/userpage',
    name: 'UserPage',
  },
  NOTICE: {
    path: '/notice',
    name: 'Notice',
  },
});

export default ROUTES;
